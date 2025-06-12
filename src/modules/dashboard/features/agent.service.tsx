import { useQuery } from "@tanstack/react-query";
import { getAgents } from "./agent.api";

const QUERY_KEYS = {
  getAgents: "agents",
};

export const useGetAgents = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: [QUERY_KEYS.getAgents],
    queryFn: getAgents,
  });

  return { data, isPending, isError };
};
