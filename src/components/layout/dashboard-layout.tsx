import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { useSidebar } from "@/contexts/sidebar-context";

export function DashboardLayout() {
  const { width } = useSidebar();

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <Header />
      <main
        className="pt-16 min-h-screen transition-all duration-300"
        style={{ marginLeft: width }}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
