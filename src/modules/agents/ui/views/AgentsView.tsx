import AgentsListHeader from "../components/AgentsListHeader";
import { getAgents } from "../../actions/actions";
import AgentsList from "../components/AgentsList";

const AgentsView = async () => {
  const agents = await getAgents();

  return (
    <>
      <AgentsListHeader />
      <AgentsList agents={agents} />
    </>
  );
};

export default AgentsView;
