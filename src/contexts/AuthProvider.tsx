"use client";

import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { User } from "@/types/types";
import { createClient } from "@/lib/supabase/client";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient();

  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) return setIsLoading(false);

    if (data.user) {
      const { data: existingUser } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", data.user.id)
        .single();

      if (!existingUser) {
        await supabase.from("users").insert({
          user_id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata.name,
          profile_picture: data.user.user_metadata.picture,
        });
      }

      setUser(existingUser ?? null);
    } else {
      setUser(null);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user) {
        supabase
          .from("users")
          .select("*")
          .eq("user_id", session.user.id)
          .single()
          .then(({ data, error }) => {
            if (error) {
              console.error("Error syncing user:", error.message);
            }
            setUser(data ?? null);
          });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 className="size-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, session, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider.");
  return context;
};
