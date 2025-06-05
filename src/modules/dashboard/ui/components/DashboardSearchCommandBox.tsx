import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

type DashboardSearchCommandBoxProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DashboardSearchCommandBox = ({
  open,
  setOpen,
}: DashboardSearchCommandBoxProps) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search for agents or meetings" />
      <CommandEmpty>No search results found</CommandEmpty>
      <CommandList>
        <CommandItem>Test</CommandItem>
      </CommandList>
    </CommandDialog>
  );
};

export default DashboardSearchCommandBox;
