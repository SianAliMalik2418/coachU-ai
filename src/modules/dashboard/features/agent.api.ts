import { createClient } from "@/lib/supabase/server";

export const getAgents = async () => {
  const supabase = await createClient();

  const agents = await supabase.from("agents").select("*");

  return agents;
};
