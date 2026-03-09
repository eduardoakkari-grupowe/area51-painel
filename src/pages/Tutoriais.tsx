import { DashboardLayout } from "@/components/DashboardLayout";
import { GraduationCap } from "lucide-react";

const Tutoriais = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tutoriais</h1>
        <p className="text-sm text-muted-foreground mt-1">Acesse tutoriais e materiais de aprendizado</p>
      </div>

      <div className="glass-card mt-6 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
        <GraduationCap className="h-16 w-16 text-primary mb-4" />
        <h2 className="text-lg font-semibold text-foreground mb-2">Em breve</h2>
        <p className="text-sm text-muted-foreground max-w-md">
          Os tutoriais estão sendo preparados. Em breve você terá acesso a materiais completos de aprendizado.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Tutoriais;
