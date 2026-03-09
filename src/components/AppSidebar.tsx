import { LayoutDashboard, Newspaper, Wrench, Users, ChevronLeft, BarChart3, GraduationCap, Image, IdCard, Video, Megaphone, LogOut } from "lucide-react";
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

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Notícias We / Clientes", url: "/noticias", icon: Newspaper },
  { title: "Notícias WT.AG / Clientes", url: "/noticias-wtag", icon: Newspaper },
  { title: "Notícias area51 / Clientes", url: "/noticias-area51", icon: Newspaper },
  { title: "Wemetrics", url: "/wemetrics", icon: BarChart3 },
  { title: "Ferramentas", url: "/ferramentas", icon: Wrench },
  { title: "Logos We / Clientes", url: "/logotipos", icon: Image },
  { title: "Logos WT.AG / Clientes", url: "/logotipos-wtag", icon: Image },
  { title: "Credenciais", url: "/credenciais", icon: IdCard },
  { title: "Onboarding", url: "/onboarding", icon: Video },
  { title: "Tutoriais", url: "/tutoriais", icon: GraduationCap },
  { title: "Eventos", url: "/eventos", icon: Megaphone },
  { title: "Usuários", url: "/usuarios", icon: Users },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <div className="flex items-center gap-2 px-4 py-[20px] border-b border-sidebar-border justify-center">
        <img
          src={area51Logo}
          alt="area51"
          className={`transition-all duration-300 ${collapsed ? "w-6" : "w-[80px] h-auto"}`}
        />
      </div>

      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/60 px-4 mb-2">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => {
                const isActive = location.pathname === item.url;
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
