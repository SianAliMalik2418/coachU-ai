"use client";

import { useRouter } from "next/navigation";
import { Agent } from "@/modules/agents/types";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";

interface Props {
  agents: Agent[];
}

export default function AgentsTable({ agents }: Props) {
  const router = useRouter();

  return (
    <DataTable
      data={agents}
      columns={columns}
      onRowClick={(agent) => router.push(`/agents/${agent.id}`)}
    />
  );
}
