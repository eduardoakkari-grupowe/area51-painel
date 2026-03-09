import { LayoutDashboard, Users, ChevronLeft, BarChart3, GraduationCap, LogOut, Box, Tag, FolderUp, ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, external: false },
];

const modelagemScrollItems = [
  { title: "Dados utilizados", hash: "dados-utilizados" },
  { title: "Objetivos", hash: "objetivos" },
  { title: "Etapas do processo", hash: "etapas-do-processo" },
  { title: "Aquário", hash: "aquario" },
  { title: "Metodologia Look Alike", hash: "metodologia-look-alike" },
  { title: "Idade", hash: "sexo" },
  { title: "Sexo X Valor", hash: "sexo-x-valor" },
  { title: "Compras (Qtde X Valor)", hash: "compras-quantidade-valor" },
  { title: "Escolaridade", hash: "escolaridade" },
];

const modelagemSubItems = [
  { title: "Personas", url: "/modelagem-estatistica/personas" },
  { title: "Conclusão de Personas", url: "/modelagem-estatistica/conclusao" },
  { title: "Composição do Aquário", url: "/modelagem-estatistica/composicao-do-aquario" },
];

const bottomItems = [
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
  const navigate = useNavigate();
  const isModelagemActive = location.pathname.startsWith("/modelagem-estatistica");
  const [modelagemOpen, setModelagemOpen] = useState(isModelagemActive);

  const renderItem = (item: { title: string; url: string; icon: React.ComponentType<{ className?: string }>; external: boolean }) => {
    const isActive = !item.external && location.pathname === item.url;
    if (item.external) {
      return (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <a href={item.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
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
          <NavLink to={item.url} end
            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${isActive ? "bg-primary/10 text-primary font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}
            activeClassName="">
            <item.icon className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border overflow-x-hidden">
      <div className="flex items-center gap-2 px-4 py-[20px] border-b border-sidebar-border justify-center">
        <img src={area51Logo} alt="area51" className={`transition-all duration-300 ${collapsed ? "w-10" : "w-[160px] h-auto"}`} />
      </div>

      <SidebarContent className="pt-4 overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-widest text-muted-foreground/60 px-4 mb-2">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map(renderItem)}

              {/* Modelagem Estatística collapsible */}
              <SidebarMenuItem>
                <Collapsible open={modelagemOpen} onOpenChange={setModelagemOpen}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 w-full ${isModelagemActive ? "bg-primary/10 text-primary font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}
                      onClick={() => {
                        navigate("/modelagem-estatistica");
                        setModelagemOpen(true);
                      }}
                    >
                      <BarChart3 className="h-[18px] w-[18px] shrink-0" />
                      {!collapsed && (
                        <>
                          <span className="flex-1 text-left">Modelagem Estatística</span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${modelagemOpen ? "rotate-180" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModelagemOpen(!modelagemOpen);
                            }}
                          />
                        </>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {!collapsed && (
                    <CollapsibleContent>
                      <SidebarMenu className="ml-4 mt-1 border-l border-border/50 pl-2 overflow-hidden space-y-1">
                        {modelagemScrollItems.map((scrollItem) => {
                          const isScrollActive = location.pathname === "/modelagem-estatistica" && location.hash === `#${scrollItem.hash}`;
                          return (
                            <SidebarMenuItem key={scrollItem.hash}>
                              <SidebarMenuButton asChild>
                                <button
                                  onClick={() => {
                                    if (location.pathname !== "/modelagem-estatistica") {
                                      navigate(`/modelagem-estatistica#${scrollItem.hash}`);
                                    } else {
                                      const el = document.getElementById(scrollItem.hash);
                                      el?.scrollIntoView({ behavior: "smooth" });
                                      window.history.replaceState(null, "", `#${scrollItem.hash}`);
                                    }
                                  }}
                                  className={`flex items-center px-3 py-1.5 rounded-md text-xs transition-all duration-200 w-full text-left ${isScrollActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}
                                >
                                  <span>{scrollItem.title}</span>
                                </button>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                        {modelagemSubItems.map((sub) => {
                          const subActive = location.pathname === sub.url;
                          return (
                            <SidebarMenuItem key={sub.url}>
                              <SidebarMenuButton asChild>
                                <NavLink to={sub.url}
                                  className={`flex items-center px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${subActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}`}
                                  activeClassName="">
                                  <span>{sub.title}</span>
                                </NavLink>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </CollapsibleContent>
                  )}
                </Collapsible>
              </SidebarMenuItem>

              {bottomItems.map(renderItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t border-sidebar-border">
        <button className={`flex items-center gap-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 w-full ${collapsed ? "justify-center px-0" : "px-4"}`}>
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span>Sair</span>}
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}