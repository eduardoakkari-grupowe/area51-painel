import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Noticias from "./pages/Noticias";
import NoticiasWtag from "./pages/NoticiasWtag";
import NoticiasArea51 from "./pages/NoticiasArea51";
import Ferramentas from "./pages/Ferramentas";
import Logotipos from "./pages/Logotipos";
import LogotiposWtag from "./pages/LogotiposWtag";
import Credenciais from "./pages/Credenciais";
import Usuarios from "./pages/Usuarios";
import Wemetrics from "./pages/Wemetrics";
import CalculadoraPopulacao from "./pages/CalculadoraPopulacao";
import CalculadoraSainsbury from "./pages/CalculadoraSainsbury";
import Tutoriais from "./pages/Tutoriais";
import Onboarding from "./pages/Onboarding";
import Eventos from "./pages/Eventos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias-wtag" element={<NoticiasWtag />} />
          <Route path="/noticias-area51" element={<NoticiasArea51 />} />
          <Route path="/ferramentas" element={<Ferramentas />} />
          <Route path="/logotipos" element={<Logotipos />} />
          <Route path="/logotipos-wtag" element={<LogotiposWtag />} />
          <Route path="/credenciais" element={<Credenciais />} />
          <Route path="/wemetrics" element={<Wemetrics />} />
          <Route path="/wemetrics/calculadora-populacao" element={<CalculadoraPopulacao />} />
          <Route path="/wemetrics/calculadora-sainsbury" element={<CalculadoraSainsbury />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/tutoriais" element={<Tutoriais />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
