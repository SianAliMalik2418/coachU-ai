"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

const BreadCrumbs = ({
  agentName,
  agentId,
}: {
  agentName: string;
  agentId: number;
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href={"/agents"}
            className="text-muted-foreground/70 hover:text-muted-foreground"
          >
            My agents
          </Link>
        </BreadcrumbItem>

        <BreadcrumbSeparator></BreadcrumbSeparator>

        <BreadcrumbItem>
          <Link href={`/agents/${agentId}`} className="text-primary">
            {agentName}
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
