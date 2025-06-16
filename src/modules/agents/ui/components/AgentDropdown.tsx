"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { EllipsisVertical, Loader2, Pencil, Trash } from "lucide-react";

const AgentDropdown = ({
  onEdit,
  onRemove,
  isDeleting,
}: {
  onEdit: () => void;
  onRemove: () => void;
  isDeleting: boolean;
}) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <EllipsisVertical className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={onEdit}>
          <Pencil />
          <p>Edit</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(isDeleting && "opacity-70")}
          onClick={onRemove}
        >
          <Trash />
          <p>Delete</p>
          {isDeleting && <Loader2 className="size-4 animate-spin" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AgentDropdown;
