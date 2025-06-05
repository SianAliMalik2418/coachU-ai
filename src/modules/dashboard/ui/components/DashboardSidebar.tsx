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
import { Bot, Star, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardUserButton from "./DashboardUserButton";

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
      <SidebarHeader className="md:py-[0.85rem] py-5  px-0">
        <Link href={"/"}>
          <Logo />
        </Link>
      </SidebarHeader>
      <div className="px-">
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
        <DashboardUserButton />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
