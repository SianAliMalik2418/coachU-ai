import { Agent } from "@/types/types";

const AgentsList = ({ agents }: { agents: Agent[] }) => {
  return <div>{JSON.stringify(agents)}</div>;
};

export default AgentsList;
