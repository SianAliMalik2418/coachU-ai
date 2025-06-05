"use client";

import GeneratedAvatar from "@/components/GeneratedAvatar";
import { useAuth } from "@/contexts/AuthProvider";
import { cn } from "@/lib/utils";
import React from "react";

const DashboardUserButton = ({
  className,
  shouldShowAvatar = true,
}: {
  className?: string;
  shouldShowAvatar?: boolean;
}) => {
  const { user } = useAuth();
  return (
    <div className="w-full  ">
      <div
        className={cn(
          "rounded-md px-2 py-2 bg-secondary backdrop:blur-lg flex gap-2",
          className
        )}
      >
        {shouldShowAvatar && (
          <GeneratedAvatar seed={user?.name || "Avatar"} variant="initials" />
        )}

        <div className="flex flex-col items-start justify-start gap-0.5">
          <p className="text-sm truncate">{user?.name}</p>
          <p className="text-xs tracking-tight">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserButton;
