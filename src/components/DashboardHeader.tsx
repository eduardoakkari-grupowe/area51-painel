import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-border/50 bg-card/40 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
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
