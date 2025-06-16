"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from "lucide-react";

import { useDebounce } from "@uidotdev/usehooks";

const AgentsSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const initialSearch = searchParams.get("search")?.toString() || "";
  const [search, setSearch] = useState(initialSearch);
  const [isPending, startTransition] = useTransition();

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedSearch) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }

    startTransition(() => {
      router.replace(`${pathName}?${params.toString()}`);
    });
  }, [debouncedSearch]);

  return (
    <Button
      variant="outline"
      className="px-2 w-60 items-center justify-between font-normal h-9"
    >
      <div className="flex items-center gap-2">
        <Search className="size-4" />
        <Input
          hideBorder
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search agents by name"
          className="text-sm w-full"
        />
      </div>
      {isPending && <Loader2 className="animate-spin size-4" />}
    </Button>
  );
};

export default AgentsSearch;
