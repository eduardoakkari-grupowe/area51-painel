import { LayoutDashboard, Newspaper, Wrench, Users, ChevronLeft, BarChart3, GraduationCap, Image, IdCard, Video, Megaphone, LogOut, Box, Tag, FolderUp } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import area51Logo from "@/assets/clients/area51.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const internalItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, external: false },
  { title: "Cubo", url: "https://cubopfpj.com/login/", icon: Box, external: true },
  { title: "Tag", url: "https://www.ph3a.com.br/crm/account/login?returnUrl=https://www.ph3a.com.br:443/crm/", icon: Tag, external: true },
  { title: "FTPs", url: "https://www.ph3a.com.br/crm/account/login?returnUrl=https://www.ph3a.com.br:443/crm/", icon: FolderUp, external: true },
  { title: "Tutoriais", url: "/tutoriais", icon: GraduationCap, external: false },
  { title: "Usuários", url: "https://www.ph3a.com.br/crm/account/login?returnUrl=https://www.ph3a.com.br:443/crm/customer/configuration", icon: Users, external: true },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      {/* area51 logo header */}
      <div className="flex items-center gap-2 px-4 py-[20px] border-b border-sidebar-border justify-center">
        <img
          src={area51Logo}
          alt="area51"
          className={`transition-all duration-300 ${collapsed ? "w-10" : "w-[160px] h-auto"}`}
        />
      </div>

      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/60 px-4 mb-2">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {internalItems.map((item) => {
                const isActive = !item.external && location.pathname === item.url;
                if (item.external) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                          <item.icon className="h-[18px] w-[18px] shrink-0" />
                          {!collapsed && <span>{item.title}</span>}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                        activeClassName=""
                      >
                        <item.icon className="h-[18px] w-[18px] shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t border-sidebar-border space-y-2">
        <button
          className={`flex items-center gap-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 w-full ${collapsed ? "justify-center px-0" : "px-4"}`}
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span>Sair</span>}
        </button>
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
        >
          <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
