"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const supabase = createClient();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/sign-in");
  };

  return <p onClick={handleLogout}>Log out</p>;
};

export default LogoutButton;
