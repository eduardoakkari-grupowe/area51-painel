import { DashboardLayout } from "@/components/DashboardLayout";
import { Megaphone } from "lucide-react";

const Eventos = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Eventos</h1>
        <p className="text-sm text-muted-foreground mt-1">Acompanhe os eventos e ativações</p>
      </div>

      <div className="glass-card mt-6 p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
        <Megaphone className="h-16 w-16 text-primary mb-4" />
        <h2 className="text-lg font-semibold text-foreground mb-2">Em breve</h2>
        <p className="text-sm text-muted-foreground max-w-md">
          A seção de eventos está sendo preparada. Em breve você terá acesso às informações de eventos e ativações.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Eventos;
