import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseProjectUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!;
  const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!;

  return createBrowserClient(supabaseProjectUrl, supabaseApiKey);
}
