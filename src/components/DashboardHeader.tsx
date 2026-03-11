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

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-border/50">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-foreground leading-tight">Admin</p>
            <p className="text-xs text-muted-foreground">admin@wemetrics.com</p>
          </div>
          <Avatar className="h-8 w-8 border border-border">
            <AvatarFallback className="bg-primary/20 text-primary text-xs font-semibold">AD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
