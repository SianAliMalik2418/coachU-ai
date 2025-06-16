import AgentsPagination from "./AgentsPagination";
import { getAgents } from "../../actions";
import AgentsTable from "./table/AgentsTable";

const AgentsList = async ({
  query,
}: {
  query: { search?: string; currentPage?: number };
}) => {
  const { search = "", currentPage = 1 } = query;

  const agents = await getAgents({ search, currentPage });

  return (
    <div className="py-5 space-y-4">
      <AgentsTable agents={agents} />
      <AgentsPagination />
    </div>
  );
};

export default AgentsList;
