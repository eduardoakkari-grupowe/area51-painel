import { DashboardLayout } from "@/components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import imgSainsbury from "@/assets/tools/img_sainsbury.png";
import imgPopulacao from "@/assets/tools/img_populacaoprojetada.png";

const Wemetrics = () => {
  const navigate = useNavigate();
  return (
  <DashboardLayout>
    <div>
      <h1 className="text-2xl font-bold text-foreground">Wemetrics</h1>
      <p className="text-sm text-muted-foreground mt-1">Acesse as métricas de nossas ferramentas</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      <div className="group glass-card flex flex-col items-center justify-center px-6 py-6 gap-3 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigate("/wemetrics/calculadora-sainsbury")}>
        <div className="h-32 flex items-center justify-center">
          <img
            src={imgSainsbury}
            alt="Calculadora de Sainsbury"
            className="max-h-32 max-w-full object-contain transition-transform duration-300 group-hover:scale-110 rounded-lg"
          />
        </div>
        <span className="text-sm text-muted-foreground text-center font-medium">Calculadora de Sainsbury</span>
      </div>

      <div className="group glass-card flex flex-col items-center justify-center px-6 py-6 gap-3 hover:border-primary/50 transition-colors cursor-pointer" onClick={() => navigate("/wemetrics/calculadora-populacao")}>
        <div className="h-32 flex items-center justify-center">
          <img
            src={imgPopulacao}
            alt="Calculadora de População Projetada"
            className="max-h-32 max-w-full object-contain transition-transform duration-300 group-hover:scale-110 rounded-lg"
          />
        </div>
        <span className="text-sm text-muted-foreground text-center font-medium">Calculadora de População Projetada</span>
      </div>
    </div>
  </DashboardLayout>
  );
};

export default Wemetrics;
