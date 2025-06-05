import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth/sign-in");

  return (
    <div className="flex flex-col gap-2 ">
      <h1>Hello world</h1>
    </div>
  );
}
