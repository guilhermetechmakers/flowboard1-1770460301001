import * as React from "react";

interface SidebarContextValue {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  width: number;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const width = collapsed ? 72 : 256;

  const value = React.useMemo(
    () => ({ collapsed, setCollapsed, width }),
    [collapsed]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    return { collapsed: false, setCollapsed: () => {}, width: 256 };
  }
  return context;
}
