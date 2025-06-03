"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { supabase } from "../../../../../supabase-client";

const LoginButton = () => {
  return (
    <Button
      onClick={() => supabase.auth.signInWithOAuth({ provider: "google" })}
    >
      Sign in with google
    </Button>
  );
};

export default LoginButton;
