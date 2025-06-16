import { Database, TablesInsert, TablesUpdate } from "@/types/supabase";

export type Agent = Database["public"]["Tables"]["agents"]["Row"];

export type GetAgentsType = {
  search?: string;
  currentPage?: number;
};

export type AgentInsertType = TablesInsert<"agents">;
export type AgentUpdateType = TablesUpdate<"agents">;
