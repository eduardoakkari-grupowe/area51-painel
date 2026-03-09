import { DashboardLayout } from "@/components/DashboardLayout";
import { Video } from "lucide-react";

const Onboarding = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Onboarding</h1>
        <p className="text-sm text-muted-foreground mt-1">Vídeos e materiais de integração</p>
      </div>

      <div className="glass-card mt-6 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
        <Video className="h-16 w-16 text-primary mb-4" />
        <h2 className="text-lg font-semibold text-foreground mb-2">Em breve</h2>
        <p className="text-sm text-muted-foreground max-w-md">
          Os conteúdos de onboarding estão sendo preparados. Em breve você terá acesso aos vídeos de integração.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Onboarding;
