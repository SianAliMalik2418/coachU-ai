"use client";

import Logo from "@/components/Logo";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Bot, CreditCard, LogOut, Sparkles, Star, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardUserButton from "./DashboardUserButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/shared/navbar/components/LogoutButton";

const DashboardSidebar = () => {
  const firstSection = [
    {
      label: "Meetings",
      href: "/meetings",
      icon: Video,
    },
    {
      label: "Agents",
      href: "/agents",
      icon: Bot,
    },
  ];

  const secondSection = [
    {
      label: "Upgrade",
      href: "/upgrade",
      icon: Star,
    },
  ];

  const pathName = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="py-5">
        <Logo />
      </SidebarHeader>
      <div className="px-3">
        <Separator />
      </div>

      <SidebarContent>
        <SidebarGroup className="gap-1 my-7">
          {firstSection.map((section) => (
            <SidebarMenuButton
              key={section.href}
              isActive={pathName === section.href}
              className="py-5"
            >
              <Link
                href={section.href}
                className="flex items-center justify-start gap-3 w-full"
              >
                <section.icon size={20} />
                <p>{section.label}</p>
              </Link>
            </SidebarMenuButton>
          ))}
        </SidebarGroup>

        <div className="px-3">
          <Separator />
        </div>

        <SidebarGroup className="gap-1 py-5">
          {secondSection.map((section) => (
            <SidebarMenuButton
              key={section.href}
              isActive={pathName === section.href}
              className="py-5"
            >
              <Link
                href={section.href}
                className="flex items-center justify-start gap-3 w-full"
              >
                <section.icon size={20} />
                <p>{section.label}</p>
              </Link>
            </SidebarMenuButton>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="py-8 px-3">
        <DashboardSideBarFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;

const DashboardSideBarFooter = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DashboardUserButton />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={"right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <DashboardUserButton
            className="bg-transparent "
            shouldShowAvatar={false}
          />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>

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
