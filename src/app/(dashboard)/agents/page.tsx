import AgentsList from "@/modules/agents/ui/components/AgentsList";
import AgentsListHeader from "@/modules/agents/ui/components/AgentsListHeader";
import AgentsSearch from "@/modules/agents/ui/components/AgentsSearch";
import { Suspense } from "react";

const Page = async (props: {
  searchParams?: Promise<{ search?: string; page?: number }>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <AgentsListHeader />

      <div className="mt-7">
        <AgentsSearch />
      </div>

      <Suspense key={search + currentPage} fallback={<Loading />}>
        <AgentsList query={{ search, currentPage }} />
      </Suspense>
    </>
  );
};

export default Page;

const Loading = () => {
  return <div>Loading...</div>;
};
