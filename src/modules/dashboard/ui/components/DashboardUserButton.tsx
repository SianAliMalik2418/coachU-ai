"use client";

import GeneratedAvatar from "@/components/GeneratedAvatar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useAuth } from "@/contexts/AuthProvider";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { CreditCard, LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/LogoutButton";
import { User } from "@/types/types";
import { Button } from "@/components/ui/button";

const DashboardUserButton = () => {
  const { user } = useAuth();

  const isMobile = useIsMobile();

  if (!user) return;

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger>
          <UserDetails user={user} />
        </DrawerTrigger>
        <DrawerContent className="mt-14  mb-10 px-3">
          <DrawerHeader>
            <DrawerTitle>{user.name}</DrawerTitle>
            <DrawerTitle className="text-primary-foreground font-normal">
              {user.email}
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-2 mt-3">
            <Button variant={"outline"} className="w-full">
              <CreditCard />
              Billing
            </Button>
            <Button variant={"outline"} className="w-full">
              <LogOut />
              <LogoutButton />
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserDetails user={user} />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={"right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <UserDetails
            className="bg-transparent"
            shouldShowAvatar={false}
            user={user}
          />
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut />
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUserButton;

const UserDetails = ({
  className,
  shouldShowAvatar = true,
  user,
}: {
  className?: string;
  shouldShowAvatar?: boolean;
  user: User;
}) => {
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
          <p className="text-xs tracking-tight truncate">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};
