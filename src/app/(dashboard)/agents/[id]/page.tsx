import { getAgent } from "@/modules/agents/actions";
import AgentView from "@/modules/agents/ui/views/AgentView";
import React from "react";

const Page = async ({ params }: { params: { id: number } }) => {
  const pageParams = await params;
  const agentId = pageParams.id;

  const agent = (await getAgent({ agentId })) ?? {};

  return <AgentView agent={agent} />;
};

export default Page;
