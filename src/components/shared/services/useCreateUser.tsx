import { User } from "@/types/types";
import { supabase } from "../../../../supabase-client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateUser = () => {
  const createUser = async (user: User) => {
    await supabase.from("users").insert(user);
  };

  const {
    data,
    error,
    isPending,
    mutate: CreateUser,
  } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("User created successfully");
    },
  });

  return { CreateUser, data, error, isPending };
};
