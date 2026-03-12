import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const mainRef = useRef<HTMLElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const handleScroll = () => setShowButton(el.scrollTop > 200);
    el.addEventListener("scroll", handleScroll, { passive: true });
    // Also listen on window in case scroll bubbles
    const handleWindowScroll = () => setShowButton(window.scrollY > 200);
    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0 relative">
          <DashboardHeader />
          <main ref={mainRef} className="flex-1 p-6 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
          {showButton && (
            <button
              onClick={() => {
                mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:opacity-90 transition-opacity"
              aria-label="Voltar ao topo"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </SidebarProvider>
  );
}
