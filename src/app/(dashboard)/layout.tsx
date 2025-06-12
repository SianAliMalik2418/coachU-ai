import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardNavbar from "@/modules/dashboard/ui/components/DashboardNavbar";
import DashboardSidebar from "@/modules/dashboard/ui/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="flex flex-col w-full  ">
        <DashboardNavbar />
        <main className="w-full px-5 py-7 lg:px-10 lg:py-6">{children}</main>
      </div>
    </SidebarProvider>
  );
}
