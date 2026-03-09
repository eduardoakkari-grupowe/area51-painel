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
              <div className="bg-primary rounded-full p-3 mb-3 shadow-lg">
                <Icon className="h-6 w-6 text-primary-foreground" />
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

      <div className="mt-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Concentric circles */}
        <div className="relative w-[340px] h-[340px] shrink-0">
          {/* Mercado Total - outer */}
          <div className="absolute inset-0 rounded-full flex flex-col items-center justify-start pt-8" style={{ background: 'linear-gradient(180deg, hsl(264 53% 18%) 0%, hsl(264 70% 12%) 100%)' }}>
            <p className="text-sm font-bold text-foreground">Mercado Total</p>
            <p className="text-[11px] text-muted-foreground">População em geral.</p>
          </div>
          {/* Mercado Potencial - middle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] w-[220px] h-[220px] rounded-full flex flex-col items-center justify-start pt-6" style={{ background: 'linear-gradient(180deg, hsl(240 35% 41%) 0%, hsl(264 45% 28%) 100%)' }}>
            <p className="text-xs font-bold text-foreground">Mercado Potencial</p>
            <p className="text-[10px] text-muted-foreground text-center px-4 mt-1">Parcela da população que apresenta perfil semelhante ao dos atuais clientes.</p>
          </div>
          {/* Prospect - inner */}
          <div className="absolute left-1/2 bottom-[15%] -translate-x-1/2 w-[130px] h-[130px] rounded-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(180deg, hsl(178 100% 32%) 0%, hsl(178 80% 26%) 100%)' }}>
            <p className="text-xs font-bold text-primary-foreground">Prospect</p>
            <p className="text-[9px] text-primary-foreground/80 text-center px-3 mt-0.5">Parcela do Mercado potencial pertencente a uma das Personas identificadas.</p>
          </div>
        </div>

        {/* Arrows and logos */}
        <div className="flex flex-col gap-10">
          {/* Meta */}
          <div className="flex items-center gap-4">
            <svg width="60" height="24" viewBox="0 0 60 24" className="shrink-0">
              <path d="M0 12 L50 12" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
              <path d="M45 6 L55 12 L45 18" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
            </svg>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground tracking-tight">∞ Meta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center text-white text-sm font-bold">f</div>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00B2FF] to-[#006AFF] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor"><path d="M12 2C6.48 2 2 6.04 2 11c0 2.83 1.38 5.35 3.54 7.04V22l3.32-1.83c.88.24 1.82.37 2.8.37h.34c5.52 0 10-4.04 10-9s-4.48-9-10-9zm1.07 12.13l-2.54-2.72L5.6 14.26l4.77-5.07 2.61 2.72 4.86-2.72-4.77 5.14z"/></svg>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor"><path d="M17.47 6.53A8.45 8.45 0 0012.05 4c-4.69 0-8.5 3.81-8.5 8.5 0 1.5.39 2.96 1.13 4.25L3.5 21l4.38-1.15a8.47 8.47 0 004.07 1.04h.01c4.69 0 8.5-3.81 8.5-8.5 0-2.27-.88-4.4-2.49-6.01z"/></svg>
                </div>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor"><path d="M12 2.16c2.72 0 3.06.01 4.12.06 1 .04 1.53.21 1.9.35.47.18.81.4 1.17.76.36.36.58.7.76 1.17.14.37.3.9.35 1.9.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.04 1-.21 1.53-.35 1.9-.18.47-.4.81-.76 1.17-.36.36-.7.58-1.17.76-.37.14-.9.3-1.9.35-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1-.04-1.53-.21-1.9-.35a3.15 3.15 0 01-1.17-.76 3.15 3.15 0 01-.76-1.17c-.14-.37-.3-.9-.35-1.9-.05-1.06-.06-1.4-.06-4.12s.01-3.06.06-4.12c.04-1 .21-1.53.35-1.9.18-.47.4-.81.76-1.17.36-.36.7-.58 1.17-.76.37-.14.9-.3 1.9-.35 1.06-.05 1.4-.06 4.12-.06zM12 0C9.24 0 8.87.01 7.8.06 6.74.11 6 .28 5.36.53a5.3 5.3 0 00-1.92 1.25A5.3 5.3 0 002.19 3.7C1.94 4.36 1.77 5.1 1.72 6.16 1.67 7.23 1.66 7.6 1.66 12.36c0 2.76.01 3.13.06 4.2.05 1.06.22 1.8.47 2.44a5.3 5.3 0 001.25 1.92 5.3 5.3 0 001.92 1.25c.64.25 1.38.42 2.44.47 1.07.05 1.44.06 4.2.06s3.13-.01 4.2-.06c1.06-.05 1.8-.22 2.44-.47a5.3 5.3 0 001.92-1.25 5.3 5.3 0 001.25-1.92c.25-.64.42-1.38.47-2.44.05-1.07.06-1.44.06-4.2s-.01-3.13-.06-4.2c-.05-1.06-.22-1.8-.47-2.44a5.3 5.3 0 00-1.25-1.92A5.3 5.3 0 0018.64.53C18 .28 17.26.11 16.2.06 15.13.01 14.76 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.85a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Google Ads */}
          <div className="flex items-center gap-4">
            <svg width="60" height="24" viewBox="0 0 60 24" className="shrink-0">
              <path d="M0 12 L50 12" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
              <path d="M45 6 L55 12 L45 18" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
            </svg>
            <div className="flex items-center gap-2">
              <img src={googleAdsIcon} alt="Google Ads" className="h-8 w-8" />
              <img src={googleAdsText} alt="Google Ads" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
  );
};

export default ModelagemEstatistica;
