"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import AgentDialog from "./AgentDialog";

const AgentsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <AgentDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        closeDialog={() => setIsDialogOpen(false)}
      />
      <h5 className="text-xl font-medium">My Agents</h5>
      <Button size={"lg"} onClick={() => setIsDialogOpen((prev) => !prev)}>
        <PlusIcon />
        New Agent
      </Button>
    </div>
  );
};

export default AgentsListHeader;
