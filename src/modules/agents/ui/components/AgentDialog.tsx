"use client";

import React, { Dispatch, SetStateAction, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button, ButtonLoading } from "@/components/ui/button";
import GeneratedAvatar from "@/components/GeneratedAvatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { agentSchema } from "../../schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createAgent } from "../../actions";

const AgentDialog = ({
  open,
  onOpenChange,
  closeDialog,
}: {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  closeDialog: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>New Agent</DialogTitle>
        <DialogDescription>Create a new agent</DialogDescription>
        <AgentForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default AgentDialog;

const AgentForm = ({ closeDialog }: { closeDialog: () => void }) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof agentSchema>>({
    resolver: zodResolver(agentSchema),
    defaultValues: {
      name: "",
      instructions: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof agentSchema>) => {
    startTransition(async () => {
      const { success, error } = await createAgent(values);
      if (error) {
        toast.error(error);
      } else {
        toast.success(success);
        form.reset();
        closeDialog();
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <GeneratedAvatar seed={form.watch("name")} variant="botttsNeutral" />

        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent name</FormLabel>
              <FormControl>
                <Input placeholder="e.g Maths Teacher" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="instructions"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g You will be my maths teacher that will help me in my assignments"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end gap-x-3">
          <Button
            variant={"outline"}
            type="button"
            disabled={isPending}
            onClick={closeDialog}
          >
            Cancel
          </Button>
          {isPending ? <ButtonLoading /> : <Button>Create</Button>}
        </div>
      </form>
    </Form>
  );
};
