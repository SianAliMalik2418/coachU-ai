"use client";

import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import AgentForm from "./AgentForm";
import { Agent } from "../../types";

const AgentDialog = ({
  open,
  onOpenChange,
  closeDialog,
  data,
}: {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  closeDialog: () => void;
  data?: Agent;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>New Agent</DialogTitle>
        <DialogDescription>Create a new agent</DialogDescription>
        <AgentForm
          initialValues={data}
          isEditing={true}
          closeDialog={closeDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AgentDialog;
