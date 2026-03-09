import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, ShoppingCart } from "lucide-react";

const ModelagemEstatistica = () => (
  <DashboardLayout>
    <div>
      <h1 className="text-2xl font-bold text-foreground">Modelagem Estatística</h1>
      <p className="text-sm text-muted-foreground mt-1">Verifique a modelagem estatística da base de clientes e ou compradores</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-2xl">
      {/* Card Clientes */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-[hsl(var(--primary))] flex items-center gap-4 p-6">
          <div className="bg-white/20 rounded-lg p-3">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div>
            <p className="text-4xl font-bold text-white">6</p>
            <p className="text-sm font-medium text-white/90">Clientes</p>
          </div>
        </div>
        <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
          <p className="text-xs text-muted-foreground">Base de clientes com <span className="font-semibold text-foreground">32.715 CPFs distintos</span> identificados na modelagem.</p>
        </div>
      </div>

      {/* Card Pedidos */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-destructive flex items-center gap-4 p-6">
          <div className="bg-white/20 rounded-lg p-3">
            <ShoppingCart className="h-8 w-8 text-white" />
          </div>
          <div>
            <p className="text-4xl font-bold text-white">41</p>
            <p className="text-sm font-medium text-white/90">Pedidos</p>
          </div>
        </div>
        <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
          <p className="text-xs text-muted-foreground">Base de <span className="font-semibold text-foreground">55.000 compras</span> registradas para análise de perfil e recorrência.</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default ModelagemEstatistica;
