"use client";

import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useTransition } from "react";

const AgentsPagination = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    startTransition(() => {
      router.replace(`${pathName}?${params.toString()}`);
    });
  };

  return (
    <Pagination className="justify-end">
      <PaginationContent>
        <PaginationItem>
          <Button variant={"outline"} onClick={() => handlePageChange(2)}>
            1{isPending && <Loader2 className="animate-spin size-4" />}
          </Button>
        </PaginationItem>
        <PaginationItem>
          <Button variant={"outline"} onClick={() => handlePageChange(2)}>
            2
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AgentsPagination;
