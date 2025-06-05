import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/dashboard/ui/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center">
      <SidebarProvider>
        <DashboardSidebar />
      </SidebarProvider>
      {children}
    </div>
  );
}
