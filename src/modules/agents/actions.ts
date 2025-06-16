"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";
import { agentSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { AgentInsertType, GetAgentsType } from "./types";

export const getAgents = async ({ search }: GetAgentsType) => {
  const supabase = await createClient();

  // Making sure user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  let query = supabase
    .from("agents")
    .select("*")
    .order("created_at", { ascending: false });
  // .range((currentPage - 1) * PAGE_SIZE, PAGE_SIZE * currentPage - 1);

  if (search && search.trim() !== "") {
    query = query.ilike("name", `%${search}%`);
  }

  const { data, error } = await query;

  if (error)
    throw new Error(
      error?.message ?? "Something went wrong while fetching agents"
    );

  return data;
};

export const getAgent = async ({ agentId }: { agentId: number }) => {
  const supabase = await createClient();

  // Making sure user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("agents")
    .select("*")
    .eq("id", agentId)
    .single();

  if (error)
    throw new Error(
      error?.message ?? "Something went wrong while fetching agents"
    );

  return data;
};

export const createAgent = async (values: z.infer<typeof agentSchema>) => {
  try {
    // Validating fields with zod on server side too
    const parsed = agentSchema.safeParse(values);

    if (!parsed.success) return { error: "Invalid input" };

    const supabase = await createClient();

    // Making sure user is logged in
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return { error: "Unauthorized" };

    // Initalizing payload for creating agent
    const payload: AgentInsertType = {
      ...values,
      user: user.id,
    };

    const { error } = await supabase.from("agents").insert(payload).single();

    // Handling Error
    if (error)
      return {
        error: error.message ?? "Something went wrong while creating agent",
      };

    // Handling success
    revalidatePath("/agents");
    return { success: "Agent created successfully" };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
};
