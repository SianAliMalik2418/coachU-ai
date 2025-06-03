"use client";

import { useAuth } from "@/contexts/AuthProvider";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="h-12 py-2 flex items-center justify-between px-20">
      <h1>CoachU AI</h1>
      {user ? user.name : <LoginButton />}
    </div>
  );
};

export default Navbar;
