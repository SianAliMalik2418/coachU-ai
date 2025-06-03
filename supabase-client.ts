import { createClient } from "@supabase/supabase-js";

const supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;

if (!supabaseProjectUrl || !supabaseApiKey) {
  console.log({ supabaseProjectUrl, supabaseApiKey });

  throw new Error("Invalid Credentials for SUPABASE");
}

export const supabase = createClient(supabaseProjectUrl, supabaseApiKey);
