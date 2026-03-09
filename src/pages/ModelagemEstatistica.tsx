import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, ShoppingCart, AlertTriangle, Code, UsersRound, SearchCheck, Share2, Target, Crosshair, Brain, UsersIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
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

const idadeDistribuicao = [
  { idade: 18, homens: 4, mulheres: 6 }, { idade: 19, homens: 6, mulheres: 7 }, { idade: 20, homens: 9, mulheres: 8 },
  { idade: 21, homens: 22, mulheres: 23 }, { idade: 22, homens: 24, mulheres: 23 }, { idade: 23, homens: 34, mulheres: 29 },
  { idade: 24, homens: 58, mulheres: 33 }, { idade: 25, homens: 66, mulheres: 54 }, { idade: 26, homens: 102, mulheres: 59 },
  { idade: 27, homens: 114, mulheres: 105 }, { idade: 28, homens: 162, mulheres: 130 }, { idade: 29, homens: 206, mulheres: 158 },
  { idade: 30, homens: 255, mulheres: 167 }, { idade: 31, homens: 338, mulheres: 229 }, { idade: 32, homens: 378, mulheres: 264 },
  { idade: 33, homens: 388, mulheres: 304 }, { idade: 34, homens: 514, mulheres: 354 }, { idade: 35, homens: 586, mulheres: 377 },
  { idade: 36, homens: 639, mulheres: 436 }, { idade: 37, homens: 701, mulheres: 472 }, { idade: 38, homens: 751, mulheres: 482 },
  { idade: 39, homens: 821, mulheres: 549 }, { idade: 40, homens: 840, mulheres: 619 }, { idade: 41, homens: 871, mulheres: 562 },
  { idade: 42, homens: 864, mulheres: 643 }, { idade: 43, homens: 919, mulheres: 734 }, { idade: 44, homens: 926, mulheres: 744 },
  { idade: 45, homens: 827, mulheres: 696 }, { idade: 46, homens: 813, mulheres: 623 }, { idade: 47, homens: 711, mulheres: 601 },
  { idade: 48, homens: 642, mulheres: 547 }, { idade: 49, homens: 568, mulheres: 507 }, { idade: 50, homens: 518, mulheres: 436 },
  { idade: 51, homens: 456, mulheres: 401 }, { idade: 52, homens: 426, mulheres: 320 }, { idade: 53, homens: 360, mulheres: 293 },
  { idade: 54, homens: 311, mulheres: 223 }, { idade: 55, homens: 298, mulheres: 238 }, { idade: 56, homens: 274, mulheres: 206 },
  { idade: 57, homens: 251, mulheres: 159 }, { idade: 58, homens: 202, mulheres: 156 }, { idade: 59, homens: 184, mulheres: 144 },
  { idade: 60, homens: 164, mulheres: 108 }, { idade: 61, homens: 172, mulheres: 109 }, { idade: 62, homens: 134, mulheres: 108 },
  { idade: 63, homens: 107, mulheres: 101 }, { idade: 64, homens: 99, mulheres: 54 }, { idade: 65, homens: 96, mulheres: 58 },
  { idade: 66, homens: 56, mulheres: 40 }, { idade: 67, homens: 56, mulheres: 48 }, { idade: 68, homens: 46, mulheres: 35 },
  { idade: 69, homens: 35, mulheres: 29 }, { idade: 70, homens: 35, mulheres: 23 }, { idade: 71, homens: 27, mulheres: 12 },
  { idade: 72, homens: 27, mulheres: 16 }, { idade: 73, homens: 21, mulheres: 13 }, { idade: 74, homens: 7, mulheres: 6 },
  { idade: 75, homens: 11, mulheres: 10 }, { idade: 76, homens: 12, mulheres: 10 }, { idade: 77, homens: 5, mulheres: 6 },
  { idade: 78, homens: 6, mulheres: 2 }, { idade: 79, homens: 6, mulheres: 5 }, { idade: 80, homens: 3, mulheres: 3 },
  { idade: 81, homens: 4, mulheres: 1 }, { idade: 82, homens: 0, mulheres: 3 }, { idade: 83, homens: 6, mulheres: 2 },
  { idade: 84, homens: 1, mulheres: 0 }, { idade: 85, homens: 1, mulheres: 0 }, { idade: 86, homens: 1, mulheres: 3 },
  { idade: 89, homens: 1, mulheres: 0 }, { idade: 90, homens: 1, mulheres: 0 }, { idade: 91, homens: 2, mulheres: 0 },
  { idade: 94, homens: 1, mulheres: 0 },
];

const idadeTabela = [
  { faixa: "18-25", volume: "305", gasto: "R$197,38", frequencia: "1.22", renda: "R$10.351" },
  { faixa: "26-35", volume: "4.533", gasto: "R$252,14", frequencia: "1.46", renda: "R$15.693" },
  { faixa: "36-45", volume: "13.728", gasto: "R$291,29", frequencia: "1.61", renda: "R$21.695" },
  { faixa: "46-55", volume: "10.125", gasto: "R$317,33", frequencia: "1.70", renda: "R$27.015" },
  { faixa: "56-65", volume: "3.159", gasto: "R$321,33", frequencia: "1.73", renda: "R$30.567" },
  { faixa: "66+", volume: "758", gasto: "R$345,64", frequencia: "1.81", renda: "R$30.582" },
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
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Dados utilizados</span>
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
          <p className="text-sm text-muted-foreground">Base de clientes distintos identificados na modelagem.</p>
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
          <p className="text-sm text-muted-foreground">Base de compras registradas para análise de perfil e recorrência.</p>
        </div>
      </div>
    </div>

    {/* Observação CNPJs */}
    <div className="mt-4 max-w-2xl flex items-center gap-2 bg-card border border-accent/30 rounded-lg px-4 py-3">
      <AlertTriangle className="h-4 w-4 text-warning shrink-0" />
      <p className="text-xs text-muted-foreground">
        Para realização da <span className="font-semibold text-foreground">MODELAGEM ESTATÍSTICA</span> foram removidos os CNPJs da base de clientes fornecida.
      </p>
    </div>

    {/* Submenu Objetivos */}
    <div id="objetivos" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-xl font-semibold text-foreground">Objetivos</span>
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
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Etapas do Processo</span>
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
                <p className="text-sm text-accent-foreground leading-relaxed">{etapa.titulo}</p>
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
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-xl font-semibold text-foreground">Aquário</span>
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
        <div className="absolute flex items-center gap-6" style={{ left: '310px', top: '230px' }}>
          <svg width="320" height="36" viewBox="0 0 213 24" className="shrink-0">
            <path d="M0 12 L203 12" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
            <path d="M198 6 L208 12 L198 18" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
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
        <div className="absolute flex items-center gap-6" style={{ left: '310px', top: '370px' }}>
          <svg width="320" height="36" viewBox="0 0 213 24" className="shrink-0">
            <path d="M0 12 L203 12" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
            <path d="M198 6 L208 12 L198 18" stroke="hsl(260, 10%, 55%)" strokeWidth="2" fill="none" />
          </svg>
          <div className="flex items-center gap-3">
            <img src={googleAdsIcon} alt="Google Ads" className="h-12 w-12" />
            <img src={googleAdsText} alt="Google Ads" className="h-9" />
          </div>
        </div>
      </div>
    </div>

    {/* Submenu Metodologia: Look Alike */}
    <div id="metodologia-look-alike" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Metodologia: Look Alike</span>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        A partir de um público de interesse, identifica indivíduos que apresentam alto nível de semelhança a ele, sendo esta semelhança dada por um score de similaridade:
      </p>

      <ul className="mt-4 space-y-3">
        <li className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
          <span className="text-sm text-muted-foreground">O desenvolvimento do modelo de Look Alike utiliza técnicas de Machine Learning com o objetivo analisar o perfil do público de interesse e identificar padrões que possibilitem diferenciar e selecionar indivíduos com alta similaridade a ele;</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
          <span className="text-sm text-muted-foreground">O score de similaridade possibilita ordenar os indivíduos em ordem decrescente de similaridade, ou seja, através dele pode-se selecionar os top 1% mais semelhantes ao público de interesse, visando o desenvolvimento de ações de prospecção;</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
          <span className="text-sm text-muted-foreground">A aplicação do modelo no Big Data area51 possibilita a seleção de indivíduos com alta similaridade ao público de interesse, visando a construção do Aquário utilizado em ações de prospecção on-line anonimizadas.</span>
        </li>
      </ul>

      {/* Visual: Público de Interesse → Machine Learning → Pessoas semelhantes */}
      <div className="mt-8 flex flex-col sm:flex-row items-start justify-start gap-6 sm:gap-10">
        {/* Público de Interesse */}
        <div className="flex flex-col items-center text-center gap-3 w-[140px]">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-lg w-[112px] h-[112px] flex items-center justify-center">
            <Crosshair className="h-16 w-16 text-foreground" />
          </div>
          <p className="text-sm font-bold text-foreground">Público de Interesse</p>
        </div>

        {/* Arrow */}
        <svg width="60" height="24" viewBox="0 0 60 24" className="shrink-0 hidden sm:block mt-11">
          <path d="M0 12 L50 12" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none" />
          <path d="M45 6 L55 12 L45 18" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none" />
        </svg>

        {/* Machine Learning */}
        <div className="flex flex-col items-center text-center gap-3 w-[140px]">
          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg w-[112px] h-[112px] flex items-center justify-center">
            <Brain className="h-16 w-16 text-white" />
          </div>
          <p className="text-sm font-bold text-foreground">Machine Learning</p>
        </div>

        {/* Arrow */}
        <svg width="60" height="24" viewBox="0 0 60 24" className="shrink-0 hidden sm:block mt-11">
          <path d="M0 12 L50 12" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none" />
          <path d="M45 6 L55 12 L45 18" stroke="hsl(var(--muted-foreground))" strokeWidth="2" fill="none" />
        </svg>

        {/* Pessoas com perfil semelhante */}
        <div className="flex flex-col items-center text-center gap-3 w-[140px]">
          <div className="bg-accent border border-accent/50 rounded-2xl p-6 shadow-lg w-[112px] h-[112px] flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <UsersIcon className="h-8 w-8 text-foreground" />
              <UsersIcon className="h-8 w-8 text-foreground" />
              <UsersIcon className="h-8 w-8 text-foreground" />
              <UsersIcon className="h-8 w-8 text-foreground" />
            </div>
          </div>
          <p className="text-sm font-bold text-foreground">Pessoas com perfil semelhante ao público de interesse.</p>
        </div>
      </div>
    </div>

    {/* Submenu Idade (Homens e Mulheres) */}
    <div id="sexo" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-xl font-semibold text-foreground">Idade (Homens e Mulheres)</span>
      </div>

      {/* Gráfico em largura total */}
      <div className="mt-6">
        <p className="text-xs text-muted-foreground mb-4">Distribuição de Idade dos Compradores</p>
        <div className="w-full h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={idadeDistribuicao} margin={{ top: 5, right: 20, left: 10, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="idade" label={{ value: "Idade", position: "insideBottom", offset: -15, style: { fill: 'hsl(var(--muted-foreground))' } }} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis label={{ value: "Frequência", angle: -90, position: "insideLeft", offset: 0, style: { fill: 'hsl(var(--muted-foreground))' } }} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} align="left" />
              <Bar dataKey="homens" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} name="Homens" />
              <Bar dataKey="mulheres" stackId="a" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} name="Mulheres" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights + Tabela lado a lado */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quadro de texto à esquerda */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-base font-bold text-primary mb-3">O Perfil Geracional e o Consumo</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">O Grupo Dominante (36-45 anos):</strong> É o maior volume da base (13.728 clientes). Eles gastam em média R$ 291,29 e são o motor do e-commerce.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">Os "Heavy Spenders" (56 anos ou mais):</strong> Embora em menor número, são os clientes que possuem o maior ticket médio (R$ 345,64 para quem tem 66+) e a maior frequência de compra (1.81). Isso indica que o público sênior, quando fidelizado, é o mais rentável.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-muted-foreground"><strong className="text-foreground">Os Jovens (18-25 anos):</strong> Representam apenas 305 clientes. O ticket médio é o menor (R$ 197,38) e a frequência também.</span>
            </li>
          </ul>
        </div>

        {/* Tabela à direita */}
        <div className="bg-card border border-border rounded-xl p-6 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10">
                <TableHead className="text-foreground font-bold text-xs">Faixa Etária</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Volume de Clientes</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Gasto Médio (M)</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Frequência</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Renda Média</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {idadeTabela.map((row) => (
                <TableRow key={row.faixa}>
                  <TableCell className="text-sm font-medium">{row.faixa}</TableCell>
                  <TableCell className="text-sm">{row.volume}</TableCell>
                  <TableCell className="text-sm">{row.gasto}</TableCell>
                  <TableCell className="text-sm">{row.frequencia}</TableCell>
                  <TableCell className="text-sm">{row.renda}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Descritivos lado a lado */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Descritivo dos Homens */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Descritivo dos Homens</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-primary mb-1">1. Nível: Jovens Adultos / Startups (Cluster 2)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 19 a 37 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 4.067 homens.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 274,10.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o público que está entrando no mercado premium. Utilizam o produto provavelmente para manter o ritmo social de festas e baladas sem comprometer o início da carreira.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">2. Nível: Consolidação de Carreira (Cluster 0)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 38 a 45 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 6.732 homens (O maior grupo da base masculina).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 311,81.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o seu "ponto doce" (sweet spot). Homens em cargos de liderança ou gestão, com vida social ativa (jantares de negócios, eventos) e que já sentem o impacto do álcool no rendimento do dia seguinte.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">3. Nível: Plenitude Profissional (Cluster 3)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 46 a 55 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 5.524 homens.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 337,72.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Homens com alto poder aquisitivo e estabilidade. O gasto médio sobe consideravelmente, indicando que compram kits maiores ou de forma mais recorrente.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">4. Nível: Sênior / Lifestyle (Cluster 1)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 56 a 95 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 2.259 homens.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 353,44 (O maior gasto médio entre os homens).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Público que preza pelo bem-estar e longevidade. O consumo do álcool é mais qualificado (vinhos e destilados premium) e o produto é visto como um suplemento de saúde essencial para manter a qualidade de vida.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Descritivo das Mulheres */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Descritivo das Mulheres</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-primary mb-1">1. Nível: Jovens Adultas / Conectadas (Cluster 1)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 19 a 38 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 3.336 mulheres.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 237,77.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o público mais jovem da base feminina. O foco aqui costuma ser o uso social intenso e a manutenção da estética/bem-estar pós-evento.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">2. Nível: Mulheres em Ascensão (Cluster 2)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 39 a 46 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 5.065 mulheres (O maior grupo da base feminina).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 268,34.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Representa o "pilar" do seu e-commerce para este gênero. Mulheres em fase de consolidação pessoal e profissional, com vida social ativa e maior ticket médio que o grupo anterior.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">3. Nível: Plenitude e Bem-Estar (Cluster 0)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 47 a 56 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 4.103 mulheres.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 297,86 (O maior gasto médio entre as mulheres).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o grupo de maior valor para a marca. Possuem maturidade financeira e utilizam o produto como uma ferramenta de saúde preventiva e auxílio no metabolismo, que se torna mais lento nesta fase.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">4. Nível: Maturidade / Sênior (Cluster 3)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 57 a 87 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 1.422 mulheres.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 290,51.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Público qualificado que mantém um consumo estável. Curiosamente, diferente dos homens, o ticket médio feminino apresenta uma leve estabilização (pequena queda) após os 57 anos comparado à faixa anterior, mas continua sendo muito alto.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Submenu Sexo X Valor */}
    <div id="sexo-x-valor" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Sexo X Valor</span>
      </div>

      <p className="text-sm text-muted-foreground mt-2 mb-4">Distribuição de Valor Gasto por Sexo (Limpando Outliers para Visão)</p>
      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        {/* Left: Boxplot chart (custom SVG) */}
        <div className="lg:w-[450px] shrink-0 bg-card border border-border rounded-xl p-6">
          <svg viewBox="0 0 400 340" className="w-full h-auto">
            {/* Grid lines */}
            {[0, 200, 400, 600, 800, 1000].map((val, i) => {
              const y = 300 - (val / 1000) * 280;
              return (
                <g key={i}>
                  <line x1="60" y1={y} x2="360" y2={y} stroke="hsl(var(--border))" strokeDasharray="3 3" strokeWidth={0.5} />
                  <text x="52" y={y + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="11">{val}</text>
                </g>
              );
            })}
            {/* Y axis label */}
            <text x="14" y="160" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11" transform="rotate(-90, 14, 160)">Valor_Monetário</text>
            {/* X axis label */}
            <text x="210" y="335" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">SEXO</text>

            {/* Male boxplot */}
            {(() => {
              const cx = 145, bw = 70;
              const toY = (v: number) => 300 - (v / 1000) * 280;
              const q1 = 120, med = 180, q3 = 350, min = 50, max = 720;
              return (
                <g>
                  {/* Whisker line */}
                  <line x1={cx} y1={toY(max)} x2={cx} y2={toY(min)} stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} />
                  {/* Whisker caps */}
                  <line x1={cx - 15} y1={toY(max)} x2={cx + 15} y2={toY(max)} stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                  <line x1={cx - 15} y1={toY(min)} x2={cx + 15} y2={toY(min)} stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                  {/* Box */}
                  <rect x={cx - bw / 2} y={toY(q3)} width={bw} height={toY(q1) - toY(q3)} fill="hsl(var(--secondary))" stroke="hsl(var(--foreground))" strokeWidth={1} rx={2} />
                  {/* Median */}
                  <line x1={cx - bw / 2} y1={toY(med)} x2={cx + bw / 2} y2={toY(med)} stroke="hsl(var(--foreground))" strokeWidth={2.5} />
                  {/* Outlier dots */}
                  {[950, 980, 990, 1000].map((v, i) => (
                    <circle key={i} cx={cx + (Math.random() - 0.5) * 10} cy={toY(v)} r={2.5} fill="hsl(var(--muted-foreground))" opacity={0.5} />
                  ))}
                  <text x={cx} y={310} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="13" fontWeight="500">M</text>
                </g>
              );
            })()}

            {/* Female boxplot */}
            {(() => {
              const cx = 275, bw = 70;
              const toY = (v: number) => 300 - (v / 1000) * 280;
              const q1 = 95, med = 155, q3 = 305, min = 40, max = 615;
              return (
                <g>
                  {/* Whisker line */}
                  <line x1={cx} y1={toY(max)} x2={cx} y2={toY(min)} stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} />
                  {/* Whisker caps */}
                  <line x1={cx - 15} y1={toY(max)} x2={cx + 15} y2={toY(max)} stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                  <line x1={cx - 15} y1={toY(min)} x2={cx + 15} y2={toY(min)} stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                  {/* Box */}
                  <rect x={cx - bw / 2} y={toY(q3)} width={bw} height={toY(q1) - toY(q3)} fill="hsl(var(--accent))" stroke="hsl(var(--foreground))" strokeWidth={1} rx={2} />
                  {/* Median */}
                  <line x1={cx - bw / 2} y1={toY(med)} x2={cx + bw / 2} y2={toY(med)} stroke="hsl(var(--foreground))" strokeWidth={2.5} />
                  {/* Outlier dots */}
                  {[920, 960, 980, 1000].map((v, i) => (
                    <circle key={i} cx={cx + (Math.random() - 0.5) * 10} cy={toY(v)} r={2.5} fill="hsl(var(--muted-foreground))" opacity={0.5} />
                  ))}
                  <text x={cx} y={310} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="13" fontWeight="500">F</text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Right: Perfis */}
        <div className="flex-1 min-w-0">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-primary mb-2">1. Perfil Masculino (Maioria e Maior LTV)</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 18.583 clientes (aprox. 57% da base).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Ticket Médio e Gasto: Homens gastam, em média, R$ 316,33, o que é cerca de 16% a mais que as mulheres.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Frequência: Também compram com uma frequência ligeiramente maior (1.70 vs 1.53).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Interesses: Têm uma penetração maior em Clubes de Vinho (94%) e Consumo de Luxo (90%). Além disso, o perfil de Apostas Online é mais que o dobro do feminino (2.46 vs 1.11%).</span></li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-primary mb-2">2. Perfil Feminino (Público Qualificado, mas "Light")</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 13.926 clientes (aprox. 43% da base).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Ticket Médio: Gastam em média R$ 271,98.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Renda e Score: A renda presumida média das mulheres na base (R$ 18.928) é significativamente menor que a dos homens (R$ 26.894), embora o Score de crédito seja muito similar (795 vs 802).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Estratégia: O público feminino parece ser mais cauteloso no ticket inicial ou focado em pacotes menores/individuais.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Submenu Compras (Quantidade X Valor) */}
    <div id="compras-quantidade-valor" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-xl font-semibold text-foreground">Compras (Quantidade X Valor)</span>
      </div>

      {/* Two charts side by side */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar chart - Quantidade de Clientes por Cluster */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Quantidade de Clientes por Cluster</p>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { cluster: "Baixo Valor", quantidade: 24932, percent: "76.4%", fill: "hsl(var(--primary))" },
                  { cluster: "Médio Valor", quantidade: 5706, percent: "17.5%", fill: "hsl(var(--secondary))" },
                  { cluster: "Alto Valor", quantidade: 1780, percent: "5.5%", fill: "hsl(var(--accent))" },
                  { cluster: "Premium", quantidade: 196, percent: "0.6%", fill: "hsl(var(--warning))" },
                ]}
                margin={{ top: 30, right: 20, left: 10, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="cluster" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} label={{ value: "Quantidade", angle: -90, position: "insideLeft", offset: 0, style: { fill: 'hsl(var(--muted-foreground))' } }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600, marginBottom: 4 }} itemStyle={{ color: 'hsl(var(--foreground))' }} formatter={(value: number, name: string, props: any) => [`${value.toLocaleString()} (${props.payload.percent})`, 'Clientes']} />
                <Bar dataKey="quantidade" radius={[4, 4, 0, 0]}>
                  {["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--warning))"].map((color, index) => (
                    <Cell key={index} fill={color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Boxplot - Distribuição de Qtde. Compras por Cluster */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Qtde. Compras por Cluster</p>
          <svg viewBox="0 0 460 320" className="w-full h-auto">
            {/* Grid lines */}
            {[0, 10, 20, 30, 40].map((val) => {
              const y = 280 - (val / 45) * 260;
              return (
                <g key={val}>
                  <line x1="55" y1={y} x2="430" y2={y} stroke="hsl(var(--border))" strokeDasharray="3 3" strokeWidth={0.5} />
                  <text x="48" y={y + 4} textAnchor="end" fill="hsl(var(--muted-foreground))" fontSize="11">{val}</text>
                </g>
              );
            })}
            <text x="14" y="150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11" transform="rotate(-90, 14, 150)">Qtde. Compras</text>

            {/* Boxplots */}
            {[
              { label: "Baixo Valor", cx: 110, color: "hsl(var(--primary))", min: 1, q1: 1, med: 1, q3: 1, max: 2, outliers: [3, 4, 5, 6] },
              { label: "Médio Valor", cx: 200, color: "hsl(var(--secondary))", min: 1, q1: 1, med: 2, q3: 2, max: 3, outliers: [5, 6, 7, 8] },
              { label: "Alto Valor", cx: 290, color: "hsl(var(--accent))", min: 3, q1: 4, med: 6, q3: 7, max: 11, outliers: [13, 14, 15] },
              { label: "Premium", cx: 380, color: "hsl(var(--warning))", min: 2, q1: 10, med: 13, q3: 18, max: 28, outliers: [33, 34, 42] },
            ].map((bp) => {
              const toY = (v: number) => 280 - (v / 45) * 260;
              const bw = 55;
              return (
                <g key={bp.label}>
                  <line x1={bp.cx} y1={toY(bp.max)} x2={bp.cx} y2={toY(bp.min)} stroke="hsl(var(--muted-foreground))" strokeWidth={1.5} />
                  <line x1={bp.cx - 12} y1={toY(bp.max)} x2={bp.cx + 12} y2={toY(bp.max)} stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                  <line x1={bp.cx - 12} y1={toY(bp.min)} x2={bp.cx + 12} y2={toY(bp.min)} stroke="hsl(var(--foreground))" strokeWidth={1.5} />
                  <rect x={bp.cx - bw / 2} y={toY(bp.q3)} width={bw} height={toY(bp.q1) - toY(bp.q3)} fill={bp.color} stroke="hsl(var(--foreground))" strokeWidth={1} rx={2} />
                  <line x1={bp.cx - bw / 2} y1={toY(bp.med)} x2={bp.cx + bw / 2} y2={toY(bp.med)} stroke="hsl(var(--foreground))" strokeWidth={2.5} />
                  {bp.outliers.map((v, i) => (
                    <circle key={i} cx={bp.cx + (i % 2 === 0 ? -3 : 3)} cy={toY(v)} r={2.5} fill="hsl(var(--muted-foreground))" opacity={0.5} />
                  ))}
                  <text x={bp.cx} y={296} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">{bp.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Considerações (esquerda) + Tabela Resumo (direita) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Considerações à esquerda */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Considerações</h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-primary mb-1">1. Nível: Compradores Pontuais — Baixo Valor</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 24.932 clientes (76,4% da base).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É a grande massa de experimentação. A média de compras é de 1,3, com gasto médio total de R$ 150 e ticket médio de R$ 119.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Estratégia: O desafio aqui é a primeira recompra. Campanhas de CRM pós-venda (ex: 20 dias após a primeira compra) são cruciais para mover esse cliente para o próximo nível.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">2. Nível: Compradores Recorrentes — Médio Valor</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 5.706 clientes (17,5% da base).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Clientes que já validaram o produto e o incluíram em sua rotina social. A média de compras é de 1,6, com gasto médio total de R$ 491 e ticket médio de R$ 332.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Estratégia: Focar em fidelização e aumento de ticket. Ofertas de assinaturas ou clubes de benefícios funcionam muito bem aqui.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">3. Nível: Clientes Fiéis — Alto Valor</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 1.780 clientes (5,5% da base).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Defensores da marca. A média de compras é de 5,7, com gasto médio total de R$ 1.285 e ticket médio de R$ 233.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Estratégia: Tratamento diferenciado. Pesquisas de satisfação (NPS) e mimos exclusivos ajudam a manter esse cliente engajado.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">4. Nível: Super-Fãs / Heavy Users — Premium</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 196 clientes (0,6% da base).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: O "topo da pirâmide". Compram em média 14,5 vezes. O gasto médio total é de R$ 4.433, com ticket médio de R$ 486.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Estratégia: São os seus embaixadores orgânicos. Devem ter um canal de atendimento direto (VIP) e podem ser usados para testes de novos produtos antes do lançamento oficial.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabela Resumo à direita */}
        <div className="bg-card border border-border rounded-xl p-6 overflow-auto">
          <p className="text-sm font-semibold text-foreground mb-3 text-center">Resumo dos Clusters</p>
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10">
                <TableHead className="text-foreground font-bold text-xs">Cluster</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Clientes</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Méd. Compras</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Méd. Valor Total</TableHead>
                <TableHead className="text-foreground font-bold text-xs">Méd. Ticket</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { cluster: "Baixo Valor", clientes: "24.932", medCompras: "1.3", medValor: "R$ 150", medTicket: "R$ 119" },
                { cluster: "Médio Valor", clientes: "5.706", medCompras: "1.6", medValor: "R$ 491", medTicket: "R$ 332" },
                { cluster: "Alto Valor", clientes: "1.780", medCompras: "5.7", medValor: "R$ 1.285", medTicket: "R$ 233" },
                { cluster: "Premium", clientes: "196", medCompras: "14.5", medValor: "R$ 4.433", medTicket: "R$ 486" },
              ].map((row) => (
                <TableRow key={row.cluster}>
                  <TableCell className="text-sm font-medium">{row.cluster}</TableCell>
                  <TableCell className="text-sm">{row.clientes}</TableCell>
                  <TableCell className="text-sm">{row.medCompras}</TableCell>
                  <TableCell className="text-sm">{row.medValor}</TableCell>
                  <TableCell className="text-sm">{row.medTicket}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>

    {/* Submenu Escolaridade */}
    <div id="escolaridade" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-xl font-semibold text-foreground">Escolaridade</span>
      </div>

      <div className="mt-6 bg-card border border-border rounded-xl p-6">
        <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes por Nível de Escolaridade</p>
        <div className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { escolaridade: "Superior Completo", quantidade: 25572, percent: "81.4%" },
                { escolaridade: "2º Grau Completo", quantidade: 2620, percent: "8.3%" },
                { escolaridade: "Superior Incompleto", quantidade: 1345, percent: "4.3%" },
                { escolaridade: "Pós-Grad./Espec.", quantidade: 1024, percent: "3.3%" },
                { escolaridade: "Mestrado", quantidade: 364, percent: "1.2%" },
                { escolaridade: "1º Grau Completo", quantidade: 185, percent: "0.6%" },
                { escolaridade: "Doutorado", quantidade: 116, percent: "0.4%" },
                { escolaridade: "2º Grau Incompleto", quantidade: 109, percent: "0.3%" },
                { escolaridade: "4ª Série Completa", quantidade: 73, percent: "0.2%" },
                { escolaridade: "5ª a 8ª Série Inc.", quantidade: 9, percent: "0.0%" },
                { escolaridade: "Até 4ª Série Inc.", quantidade: 8, percent: "0.0%" },
                { escolaridade: "Pós-Doutorado", quantidade: 3, percent: "0.0%" },
                { escolaridade: "Analfabeto", quantidade: 2, percent: "0.0%" },
                { escolaridade: "Sem Informação", quantidade: 1184, percent: "3.6%" },
              ]}
              margin={{ top: 20, right: 20, left: 10, bottom: 120 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="escolaridade" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} angle={-45} textAnchor="end" interval={0} height={120} />
              <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 } }} />
              <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600, marginBottom: 4 }} itemStyle={{ color: 'hsl(var(--foreground))' }} formatter={(value: number, name: string, props: any) => [`${value.toLocaleString()} (${props.payload.percent})`, 'Clientes']} />
              <Bar dataKey="quantidade" radius={[4, 4, 0, 0]} fill="hsl(var(--accent))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </DashboardLayout>
  );
};

export default ModelagemEstatistica;
