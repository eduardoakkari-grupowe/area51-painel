import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, ShoppingCart, AlertTriangle, Code, UsersRound, SearchCheck, Share2, Target } from "lucide-react";
import googleAdsIcon from "@/assets/google-ads-icon.png";
import googleAdsText from "@/assets/google-ads-text.png";
import metaIcon from "@/assets/meta-icon.png";
import metaText from "@/assets/meta-text.png";
import metaApps from "@/assets/meta-apps.png";

const etapas = [
  {
    icon: Code,
    titulo: "Implantação da Tag area51 no site da empresa.",
  },
  {
    icon: UsersRound,
    titulo: "Empresa disponibiliza para a area51 uma amostra de sua base de clientes ou público de interesse para estudo.",
  },
  {
    icon: SearchCheck,
    titulo: "Análise de perfil e criação de personas, considerando amostra de clientes ou público de interesse.",
  },
  {
    icon: Share2,
    titulo: "Desenvolvimento do modelo de Look Alike.",
  },
  {
    icon: Target,
    titulo: "Aplicação do modelo de Look Alike no Big Data area51 visando identificar indivíduos que apresentam alta semelhança com o público de interesse.",
  },
];

const objetivos = [
  "Estudo do perfil de clientes da Novvo;",
  "Criação das Personas, com a identificação dos segmentos onde há predomínio de \"clientes\";",
  "Desenvolvimento de modelo de Look Alike, tendo por objetivo identificar na area51 pessoas que possuem perfil semelhante aos atuais clientes, visando o desenvolvimento de ações de prospecção anonimizadas;",
  "Estudo comparativo do perfil de clientes com perfis de afinidade area51;",
  "Avaliação de perfis com taxa de recorrência para a prospecção de clientes;",
];

const ModelagemEstatistica = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
  <DashboardLayout>
    <div>
      <h1 className="text-2xl font-bold text-foreground">Modelagem Estatística</h1>
      <p className="text-sm text-muted-foreground mt-1">Verifique a modelagem estatística da base de clientes e ou compradores</p>
    </div>

    {/* Submenu Dados utilizados */}
    <div id="dados-utilizados" className="mt-8 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-sm font-semibold text-foreground">Dados utilizados</span>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 max-w-2xl">
      {/* Card Clientes */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-primary flex items-center gap-4 p-6">
          <div className="bg-white/20 rounded-lg p-3">
            <Users className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <p className="text-4xl font-bold text-primary-foreground">32.715</p>
            <p className="text-sm font-medium text-primary-foreground/90">CPFs / Clientes</p>
          </div>
        </div>
        <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
          <p className="text-xs text-muted-foreground">Base de clientes distintos identificados na modelagem.</p>
        </div>
      </div>

      {/* Card Compras */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <div className="bg-accent flex items-center gap-4 p-6">
          <div className="bg-white/20 rounded-lg p-3">
            <ShoppingCart className="h-8 w-8 text-accent-foreground" />
          </div>
          <div>
            <p className="text-4xl font-bold text-accent-foreground">55.000</p>
            <p className="text-sm font-medium text-accent-foreground/90">Compras</p>
          </div>
        </div>
        <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
          <p className="text-xs text-muted-foreground">Base de compras registradas para análise de perfil e recorrência.</p>
        </div>
      </div>
    </div>

    {/* Observação CNPJs */}
    <div className="mt-4 max-w-2xl flex items-center gap-2 bg-card border border-warning/30 rounded-lg px-4 py-3">
      <AlertTriangle className="h-4 w-4 text-warning shrink-0" />
      <p className="text-xs text-muted-foreground">
        Para realização da <span className="font-semibold text-foreground">MODELAGEM ESTATÍSTICA</span> foram removidos os CNPJs da base de clientes fornecida.
      </p>
    </div>

    {/* Submenu Objetivos */}
    <div id="objetivos" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-sm font-semibold text-foreground">Objetivos</span>
      </div>

      <ul className="mt-4 space-y-3">
        {objetivos.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Submenu Etapas do Processo */}
    <div id="etapas-do-processo" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <span className="text-sm font-semibold text-foreground">Etapas do Processo</span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {etapas.map((etapa, i) => {
          const Icon = etapa.icon;
          return (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="bg-primary rounded-full p-6 mb-3 shadow-lg">
                <Icon className="h-12 w-12 text-primary-foreground" />
              </div>
              <div className="bg-accent rounded-xl p-4 flex-1 flex items-center">
                <p className="text-xs text-accent-foreground leading-relaxed">{etapa.titulo}</p>
              </div>
              {i < etapas.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-muted-foreground text-lg font-bold">›</span>
              )}
            </div>
          );
        })}
      </div>
    </div>

    {/* Submenu Aquário */}
    <div id="aquario" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
        <div className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-sm font-semibold text-foreground">Aquário</span>
      </div>

      <div className="mt-6 relative" style={{ minHeight: '510px' }}>
        {/* Concentric circles */}
        <div className="relative w-[510px] h-[510px] shrink-0">
          {/* Mercado Total - outer */}
          <div className="absolute inset-0 rounded-full flex flex-col items-center justify-start pt-12" style={{ background: 'linear-gradient(180deg, hsl(264 53% 18%) 0%, hsl(264 70% 12%) 100%)' }}>
            <p className="text-lg font-bold text-foreground">Mercado Total</p>
            <p className="text-sm text-muted-foreground">População em geral.</p>
          </div>
          {/* Mercado Potencial - middle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] w-[330px] h-[330px] rounded-full flex flex-col items-center justify-start pt-9" style={{ background: 'linear-gradient(180deg, hsl(240 35% 41%) 0%, hsl(264 45% 28%) 100%)' }}>
            <p className="text-sm font-bold text-foreground">Mercado Potencial</p>
            <p className="text-xs text-muted-foreground text-center px-6 mt-1">Parcela da população que apresenta perfil semelhante ao dos atuais clientes.</p>
          </div>
          {/* Prospect - inner */}
          <div className="absolute left-1/2 bottom-[15%] -translate-x-1/2 w-[195px] h-[195px] rounded-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(180deg, hsl(178 100% 32%) 0%, hsl(178 80% 26%) 100%)' }}>
            <p className="text-sm font-bold text-primary-foreground">Prospect</p>
            <p className="text-[11px] text-primary-foreground/80 text-center px-4 mt-0.5">Parcela do Mercado potencial pertencente a uma das Personas identificadas.</p>
          </div>
        </div>

        {/* Meta - arrow from Prospect going up-right */}
        <div className="absolute flex items-center gap-6" style={{ left: '350px', top: '280px' }}>
          <svg width="120" height="36" viewBox="0 0 80 24" className="shrink-0">
            <path d="M0 12 L70 12" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
            <path d="M65 6 L75 12 L65 18" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
          </svg>
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img src={metaIcon} alt="Meta" className="h-12 w-auto" />
              <img src={metaText} alt="Meta" className="h-9" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <img src={metaApps} alt="Facebook, Messenger, WhatsApp, Instagram" className="h-12" />
          </div>
        </div>

        {/* Google Ads - arrow from Prospect going down-right */}
        <div className="absolute flex items-center gap-6" style={{ left: '350px', top: '400px' }}>
          <svg width="120" height="36" viewBox="0 0 80 24" className="shrink-0">
            <path d="M0 12 L70 12" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
            <path d="M65 6 L75 12 L65 18" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
          </svg>
          <div className="flex items-center gap-3">
            <img src={googleAdsIcon} alt="Google Ads" className="h-12 w-12" />
            <img src={googleAdsText} alt="Google Ads" className="h-9" />
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
  );
};

export default ModelagemEstatistica;
