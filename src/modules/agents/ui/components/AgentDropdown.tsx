"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";

const AgentDropdown = ({
  onEdit,
  onRemove,
}: {
  onEdit: () => void;
  onRemove: () => void;
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
        <DropdownMenuItem onClick={onRemove}>
          <Trash />
          <p>Delete</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AgentDropdown;
