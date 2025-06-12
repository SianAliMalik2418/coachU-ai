import { z } from "zod";

export const agentSchema = z.object({
  name: z
    .string()
    .min(1, "Agent name is required")
    .max(50, "Agent name cannot be more than 50 characters"),
  instructions: z
    .string()
    .min(1, "Instructions for agent are required")
    .max(500, "Instructions for agent cannot exceed 500 characters"),
});
