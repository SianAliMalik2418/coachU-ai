"use client";

import GeneratedAvatar from "@/components/GeneratedAvatar";
import { Button } from "@/components/ui/button";
import { Agent } from "@/modules/agents/types";
import { ColumnDef } from "@tanstack/react-table";
import { CornerDownRightIcon, VideoIcon } from "lucide-react";

export const columns: ColumnDef<Agent>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <GeneratedAvatar
              className="size-7"
              variant="botttsNeutral"
              seed={row.original.name}
            />
            <h2 className="font-semibold ">{row.original.name}</h2>
          </div>
          <div className="flex items-center gap-1.5 font-light">
            <CornerDownRightIcon size={20} className="" />
            <span className="text-sm">{row.original.instructions}</span>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "meetingCount",
    header: "Meeting count",
    cell: () => {
      return (
        <Button
          variant={"outline"}
          className="flex opacity-80 items-center gap-1.5"
        >
          <VideoIcon className="text-primary" />
          <h2 className="text-sm font-normal">5 meetings</h2>
        </Button>
      );
    },
  },
];
