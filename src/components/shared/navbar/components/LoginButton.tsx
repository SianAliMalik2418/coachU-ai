"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export const LoginButton = () => {
  const supabase = createClient();

  const handleLogin = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        // queryParams: {
        //   prompt: "select_account",
        // },
      },
    });

    if (data.url) {
      redirect(data.url);
    }
  };

  return <Button onClick={handleLogin}>Sign in with google</Button>;
};
