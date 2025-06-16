"use client";

import GeneratedAvatar from "@/components/GeneratedAvatar";
import { Agent } from "../../types";
import AgentDropdown from "../components/AgentDropdown";
import BreadCrumbs from "../components/BreadCrumbs";
import { VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import AgentDialog from "../components/AgentDialog";
import { deleteAgent } from "../../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AgentView = ({ agent }: { agent: Agent }) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleAgentDelete = async () => {
    startTransition(async () => {
      const { success, error } = await deleteAgent(agent.id);
      if (error) {
        toast.error(error);
      } else {
        toast.success(success);
        router.push("/agents");
      }
    });
  };

  return (
    <div className="space-y-5">
      {isEditDialogOpen && (
        <AgentDialog
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          closeDialog={() => setIsEditDialogOpen(false)}
          data={agent}
        />
      )}
      <div className="flex items-center justify-between">
        <BreadCrumbs agentId={agent.id} agentName={agent.name} />
        <AgentDropdown
          onEdit={() => {
            setIsEditDialogOpen(true);
          }}
          onRemove={handleAgentDelete}
          isDeleting={isPending}
        />
      </div>
      <AgentDetails agent={agent} />
    </div>
  );
};

export default AgentView;

const AgentDetails = ({ agent }: { agent: Agent }) => {
  return (
    <div className="bg-secondary space-y-4 p-5  rounded-md">
      <div className="flex items-center justify-start gap-2">
        <GeneratedAvatar seed={agent.name} variant="botttsNeutral" />
        <h1 className="font-medium text-lg">{agent.name}</h1>
      </div>
      <Button
        variant={"outline"}
        className="flex opacity-80 items-center gap-1.5 cursor-default"
      >
        <VideoIcon className="text-primary" />
        <h2 className="text-sm font-normal">5 meetings</h2>
      </Button>

      <h2 className="font-medium text-lg">Instructions</h2>
      <p className="text-sm text-muted-foreground">{agent.instructions}</p>
    </div>
  );
};
