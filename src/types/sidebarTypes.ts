export interface SidebarContextType {
  expanded: boolean;
}

export interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export interface SidebarProps {
  children: React.ReactNode;
}
