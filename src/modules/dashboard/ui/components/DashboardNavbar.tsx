"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardSearchCommandBox from "./DashboardSearchCommandBox";

const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar();
  return (
    <nav className="bg-sidebar px-4 flex items-center justify-start gap-4 py-3 ">
      <Button
        variant={"outline"}
        size={"sm"}
        className="w-10 h-9"
        onClick={toggleSidebar}
      >
        {state === "collapsed" || isMobile ? (
          <PanelLeftIcon className="size-4" />
        ) : (
          <PanelLeftCloseIcon className="size-4" />
        )}
      </Button>
      <SearchBar />
    </nav>
  );
};

export default DashboardNavbar;

const SearchBar = () => {
  const [isCommandBoxOpen, setIsCommandBoxOpen] = useState(false);

  const handleCommandBoxToggle = () => {
    setIsCommandBoxOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleCommandBoxToggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <DashboardSearchCommandBox
        open={isCommandBoxOpen}
        setOpen={setIsCommandBoxOpen}
      />
      <Button
        variant="outline"
        className="px-2 w-52 items-center justify-between font-normal h-9"
        onClick={handleCommandBoxToggle}
      >
        <div className="flex items-center gap-2">
          <Search className="size-4" />
          <span className="text-sm">Search</span>
        </div>
        <kbd className="text-xs bg-muted px-1 py-0.5 rounded text-muted-foreground">
          <span className="text-xs">&#8984;</span> K
        </kbd>
      </Button>
    </>
  );
};
