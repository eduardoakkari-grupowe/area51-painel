import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import novvoLogo from "@/assets/logo-novvo.png";

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between px-6 border-b border-border/50 bg-card/40 backdrop-blur-sm" style={{ height: '76px' }}>
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <img src={novvoLogo} alt="Novvo" style={{ height: 'calc(14 * 0.6 * 0.25rem + 5px)' }} />
      </div>

      <div />
    </header>
  );
}
