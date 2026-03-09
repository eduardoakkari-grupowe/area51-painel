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
import ModelagemEstatistica from "./pages/ModelagemEstatistica";
import ObjetivosEDados from "./pages/modelagem/ObjetivosEDados";
import EtapasDoProcesso from "./pages/modelagem/EtapasDoProcesso";
import Aquario from "./pages/modelagem/Aquario";
import MetodologiaLookAlike from "./pages/modelagem/MetodologiaLookAlike";
import Sexo from "./pages/modelagem/Sexo";
import Idade from "./pages/modelagem/Idade";
import Compras from "./pages/modelagem/Compras";
import Escolaridade from "./pages/modelagem/Escolaridade";
import Personas from "./pages/modelagem/Personas";
import Conclusao from "./pages/modelagem/Conclusao";
import ComposicaoDoAquario from "./pages/modelagem/ComposicaoDoAquario";
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
          <Route path="/modelagem-estatistica" element={<ModelagemEstatistica />} />
          <Route path="/modelagem-estatistica/objetivos-e-dados" element={<ObjetivosEDados />} />
          <Route path="/modelagem-estatistica/etapas-do-processo" element={<EtapasDoProcesso />} />
          <Route path="/modelagem-estatistica/aquario" element={<Aquario />} />
          <Route path="/modelagem-estatistica/metodologia-look-alike" element={<MetodologiaLookAlike />} />
          <Route path="/modelagem-estatistica/sexo" element={<Sexo />} />
          <Route path="/modelagem-estatistica/idade" element={<Idade />} />
          <Route path="/modelagem-estatistica/compras" element={<Compras />} />
          <Route path="/modelagem-estatistica/escolaridade" element={<Escolaridade />} />
          <Route path="/modelagem-estatistica/personas" element={<Personas />} />
          <Route path="/modelagem-estatistica/conclusao" element={<Conclusao />} />
          <Route path="/modelagem-estatistica/composicao-do-aquario" element={<ComposicaoDoAquario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;