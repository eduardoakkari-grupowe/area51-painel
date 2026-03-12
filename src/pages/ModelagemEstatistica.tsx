import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, ShoppingCart, AlertTriangle, Code, UsersRound, SearchCheck, Share2, Target, Crosshair, Brain, UsersIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell, LabelList, PieChart, Pie } from "recharts";
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
  "Criação das Personas, com a identificação de atributos que possam diferenciar os clientes para posterior utilizaçao no look alike com a base area51.;",
  "Desenvolvimento de modelo de Look Alike, tendo por objetivo identificar na area51 pessoas que possuem perfil semelhante aos atuais clientes, visando o desenvolvimento de ações de prospecção anonimizadas;",

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

    <div className="flex flex-col gap-6 mt-4 w-full">
      {/* Card Compras */}
      <div className="rounded-xl overflow-hidden shadow-lg w-full">
        <div className="bg-accent flex items-center gap-4 p-6">
          <div className="bg-white/20 rounded-lg p-3">
            <ShoppingCart className="h-8 w-8 text-accent-foreground" />
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-accent-foreground">55.000</p>
            <p className="text-lg font-medium text-accent-foreground/90">Compras</p>
          </div>
        </div>
        <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
          <p className="text-sm text-muted-foreground">Base de compras registradas para análise de perfil e recorrência.</p>
        </div>
      </div>

      {/* Card Clientes */}
      <div className="rounded-xl overflow-hidden shadow-lg w-full">
        <div className="bg-primary flex items-center gap-4 p-6">
          <div className="bg-white/20 rounded-lg p-3">
            <Users className="h-8 w-8 text-primary-foreground" />
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-primary-foreground">32.715</p>
            <p className="text-lg font-medium text-primary-foreground/90">CPFs / Clientes</p>
          </div>
        </div>
        <div className="bg-card p-4 border border-t-0 border-border rounded-b-xl">
          <p className="text-sm text-muted-foreground">Base de clientes distintos identificados na modelagem.</p>
        </div>
      </div>
    </div>

    {/* Observação CNPJs */}
    <div className="mt-4 w-full flex items-center gap-2 bg-card border border-accent/30 rounded-lg px-4 py-3">
      <AlertTriangle className="h-4 w-4 text-warning shrink-0" />
      <p className="text-xs text-muted-foreground">
        Para realização da <span className="font-semibold text-foreground">MODELAGEM ESTATÍSTICA</span> foram removidos os CNPJs da base fornecida.
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
        A partir de um público de interesse, identificamos indivíduos que apresentam alto nível de semelhança a ele, sendo esta semelhança dada por um score de similaridade:
      </p>

      <ul className="mt-4 space-y-3">
        <li className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
          <span className="text-sm text-muted-foreground">O desenvolvimento do modelo de Look Alike utiliza técnicas de Machine Learning com o objetivo analisar o perfil do público de interesse e identificar padrões que possibilitem diferenciar e selecionar indivíduos com alta similaridade a ele;</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
          <span className="text-sm text-muted-foreground">O score de similaridade possibilita ordenar os indivíduos em ordem decrescente de similaridade, ou seja, através dele pode-se selecionar os top perfis mais semelhantes ao público de interesse, visando o desenvolvimento de ações de prospecção;</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
          <span className="text-sm text-muted-foreground">A aplicação do modelo no Big Data area51 possibilita a seleção desses indivíduos com alta similaridade ao público de interesse, visando a construção do Aquário utilizado para montagem dos públicos para realização de ações de prospecção on-line anonimizadas.</span>
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
          <div className="bg-gradient-to-br from-accent via-primary to-secondary rounded-2xl p-6 shadow-lg w-[112px] h-[112px] flex items-center justify-center">
            <Brain className="h-16 w-16 text-primary-foreground" />
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
            <BarChart data={idadeDistribuicao} margin={{ top: 5, right: 20, left: 10, bottom: 25 }} barSize={12} barGap={-12}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="idade" label={{ value: "Idade", position: "insideBottom", offset: -15, style: { fill: 'hsl(var(--muted-foreground))' } }} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis label={{ value: "Frequência", angle: -90, position: "insideLeft", offset: 0, style: { fill: 'hsl(var(--muted-foreground))' } }} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
              <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} align="left" />
              <Bar dataKey="homens" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} name="Homens" />
              <Bar dataKey="mulheres" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} name="Mulheres" />
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
              <p className="text-sm font-bold text-primary mb-1">1. Nível: Jovens Adultos / Startups</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 19 a 37 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 4.067 homens.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 274,10.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o público que está entrando no mercado premium. Utilizam o produto provavelmente para manter o ritmo social de festas e baladas sem comprometer o início da carreira.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">2. Nível: Consolidação de Carreira</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 38 a 45 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 6.732 homens (O maior grupo da base masculina).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 311,81.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o seu "ponto doce" (sweet spot). Homens em cargos de liderança ou gestão, com vida social ativa (jantares de negócios, eventos) e que já sentem o impacto do álcool no rendimento do dia seguinte.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">3. Nível: Plenitude Profissional</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 46 a 55 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 5.524 homens.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 337,72.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Homens com alto poder aquisitivo e estabilidade. O gasto médio sobe consideravelmente, indicando que compram kits maiores ou de forma mais recorrente.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">4. Nível: Sênior / Lifestyle</p>
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
              <p className="text-sm font-bold text-primary mb-1">1. Nível: Jovens Adultas / Conectadas</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 19 a 38 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 3.336 mulheres.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 237,77.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o público mais jovem da base feminina. O foco aqui costuma ser o uso social intenso e a manutenção da estética/bem-estar pós-evento.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">2. Nível: Mulheres em Ascensão</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 39 a 46 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 5.065 mulheres (O maior grupo da base feminina).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 268,34.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: Representa o "pilar" do seu e-commerce para este gênero. Mulheres em fase de consolidação pessoal e profissional, com vida social ativa e maior ticket médio que o grupo anterior.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">3. Nível: Plenitude e Bem-Estar</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Faixa Etária: 47 a 56 anos.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Volume: 4.103 mulheres.</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Gasto Médio: R$ 297,86 (O maior gasto médio entre as mulheres).</span></li>
                <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground shrink-0" /><span className="text-sm text-muted-foreground">Perfil: É o grupo de maior valor para a marca. Possuem maturidade financeira e utilizam o produto como uma ferramenta de saúde preventiva e auxílio no metabolismo, que se torna mais lento nesta fase.</span></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-1">4. Nível: Maturidade / Sênior</p>
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

      {/* 3 Boxplots side by side */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico 1 - Pizza Homens vs Mulheres */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição por Sexo</p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Masculino", value: 18583, percent: "57%" },
                    { name: "Feminino", value: 13926, percent: "43%" },
                  ]}
                  cx="50%"
                  cy="45%"
                  innerRadius={50}
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${percent}`}
                  labelLine={{ stroke: "hsl(var(--muted-foreground))" }}
                >
                  <Cell fill="hsl(var(--primary))" />
                  <Cell fill="hsl(var(--accent))" />
                </Pie>
                <Tooltip
                  contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }}
                  formatter={(value: number) => [value.toLocaleString(), 'Clientes']}
                />
                <Legend
                  formatter={(value: string) => <span style={{ color: 'hsl(var(--muted-foreground))' }}>{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2 - Masculino Valor Pago (K=4) */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Masculino — Valor Pago (K=4)</p>
          <div className="h-[200px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { cluster: "Baixo Valor", quantidade: 15894, fill: "hsl(var(--primary))" },
                  { cluster: "Médio Valor", quantidade: 2208, fill: "hsl(var(--secondary))" },
                  { cluster: "Alto Valor", quantidade: 430, fill: "hsl(var(--accent))" },
                  { cluster: "Premium", quantidade: 51, fill: "hsl(var(--warning))" },
                ]}
                margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="cluster" tick={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tick={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} formatter={(value: number) => [value.toLocaleString(), 'Clientes']} />
                <Bar dataKey="quantidade" radius={[4, 4, 0, 0]}>
                  {["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--warning))"].map((color, index) => (
                    <Cell key={index} fill={color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {[
              { cluster: "Baixo Valor", qtd: "15.894", pct: "85,5%", faixa: "R$0 a R$491,56", gasto: "R$176,04", freq: "1,23", color: "hsl(var(--primary))" },
              { cluster: "Médio Valor", qtd: "2.208", pct: "11,9%", faixa: "R$492 a R$1.535", gasto: "R$808,70", freq: "3,44", color: "hsl(var(--secondary))" },
              { cluster: "Alto Valor", qtd: "430", pct: "2,3%", faixa: "R$1.538 a R$4.193", gasto: "R$2.271,05", freq: "8,23", color: "hsl(var(--accent))" },
              { cluster: "Premium", qtd: "51", pct: "0,3%", faixa: "R$4.257 a R$11.843", gasto: "R$6.238,51", freq: "17,20", color: "hsl(var(--warning))" },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-semibold text-foreground">{item.cluster} — {item.qtd} ({item.pct})</span>
                </div>
                <p className="text-xs text-muted-foreground ml-4">Faixa: {item.faixa}</p>
                <p className="text-xs text-muted-foreground ml-4">Gasto médio: {item.gasto} | Freq: {item.freq}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico 3 - Feminino Valor Pago (K=4) */}
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Feminino — Valor Pago (K=4)</p>
          <div className="h-[200px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { cluster: "Baixo Valor", quantidade: 10471, fill: "hsl(var(--primary))" },
                  { cluster: "Médio Valor", quantidade: 2964, fill: "hsl(var(--secondary))" },
                  { cluster: "Alto Valor", quantidade: 443, fill: "hsl(var(--accent))" },
                  { cluster: "Premium", quantidade: 48, fill: "hsl(var(--warning))" },
                ]}
                margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="cluster" tick={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tick={{ fontSize: 9, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} formatter={(value: number) => [value.toLocaleString(), 'Clientes']} />
                <Bar dataKey="quantidade" radius={[4, 4, 0, 0]}>
                  {["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--warning))"].map((color, index) => (
                    <Cell key={index} fill={color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {[
              { cluster: "Baixo Valor", qtd: "10.471", pct: "75,2%", faixa: "R$0 a R$310,31", gasto: "R$131,42", freq: "1,12", color: "hsl(var(--primary))" },
              { cluster: "Médio Valor", qtd: "2.964", pct: "21,3%", faixa: "R$310,64 a R$1.055", gasto: "R$489,30", freq: "2,14", color: "hsl(var(--secondary))" },
              { cluster: "Alto Valor", qtd: "443", pct: "3,2%", faixa: "R$1.058 a R$3.235", gasto: "R$1.627,83", freq: "5,97", color: "hsl(var(--accent))" },
              { cluster: "Premium", qtd: "48", pct: "0,3%", faixa: "R$3.380 a R$9.692", gasto: "R$5.001,63", freq: "13,12", color: "hsl(var(--warning))" },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-semibold text-foreground">{item.cluster} — {item.qtd} ({item.pct})</span>
                </div>
                <p className="text-xs text-muted-foreground ml-4">Faixa: {item.faixa}</p>
                <p className="text-xs text-muted-foreground ml-4">Gasto médio: {item.gasto} | Freq: {item.freq}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Considerações */}
      <div className="mt-6 bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Considerações</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

    {/* Submenu Compras (Quantidade X Valor) */}
    <div id="compras-quantidade-valor" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-xl font-semibold text-foreground">Compras (Quantidade X Valor)</span>
      </div>

      {/* Two charts side by side */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Bar chart - Quantidade de Clientes por Cluster */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Quantidade de Clientes por Cluster</p>
          <div className="flex-1 min-h-[320px]">
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

        {/* Tabela Resumo (no lugar do Boxplot) */}
        <div className="bg-card border border-border rounded-xl p-6 overflow-auto h-full flex flex-col justify-center">
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

      {/* Considerações em largura total */}
      <div className="mt-6 bg-card border border-border rounded-xl p-6 w-full">
        <h3 className="text-lg font-bold text-foreground mb-4">Considerações</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
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
    </div>

    {/* Submenu Escolaridade */}
    <div id="escolaridade" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Escolaridade</span>
      </div>

      {/* Chart and Table side by side */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Gráfico à esquerda */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes por Nível de Escolaridade</p>
          <div className="flex-1 min-h-[480px]">
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
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="escolaridade" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} angle={-45} textAnchor="end" height={60} />
                <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: -5, style: { fill: 'hsl(var(--muted-foreground))' } }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600, marginBottom: 4 }} itemStyle={{ color: 'hsl(var(--foreground))' }} formatter={(value: number, name: string, props: any) => [`${value.toLocaleString()} (${props.payload.percent})`, 'Clientes']} />
                <Bar dataKey="quantidade" radius={[4, 4, 0, 0]} fill="hsl(var(--accent))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabela à direita */}
        <div className="bg-card border border-border rounded-xl p-6 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10">
                <TableHead className="text-foreground font-bold text-xs">Escolaridade</TableHead>
                <TableHead className="text-foreground font-bold text-xs text-right w-[60px]">Qtde</TableHead>
                <TableHead className="text-foreground font-bold text-xs text-right">% do Total</TableHead>
                <TableHead className="text-foreground font-bold text-xs text-right">Freq. Média</TableHead>
                <TableHead className="text-foreground font-bold text-xs text-right">Gasto Médio (LTV)</TableHead>
                <TableHead className="text-foreground font-bold text-xs text-right">Renda Média</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { nivel: "Superior Completo", qtd: "25.572", pct: "81,4%", freq: "1.65", gasto: "R$305,53", renda: "R$25.421" },
                { nivel: "Ensino Médio", qtd: "2.620", pct: "8,3%", freq: "1.57", gasto: "R$260,80", renda: "R$13.450" },
                { nivel: "Superior Incompleto", qtd: "1.345", pct: "4,3%", freq: "1.52", gasto: "R$257,21", renda: "R$16.390" },
                { nivel: "Pós-Graduação", qtd: "1.024", pct: "3,3%", freq: "1.62", gasto: "R$278,37", renda: "R$26.326" },
                { nivel: "Sem Informação", qtd: "1.184", pct: "3,6%", freq: "1.44", gasto: "R$252,65", renda: "R$9.669" },
                { nivel: "Mestrado", qtd: "364", pct: "1,2%", freq: "1.77", gasto: "R$329,50", renda: "R$30.718" },
                { nivel: "Ensino Fundamental", qtd: "185", pct: "0,6%", freq: "1.58", gasto: "R$301,88", renda: "R$11.053" },
                { nivel: "Doutorado", qtd: "116", pct: "0,4%", freq: "1.70", gasto: "R$328,81", renda: "R$29.378" },
                { nivel: "Ensino Médio Incompleto", qtd: "109", pct: "0,3%", freq: "1.38", gasto: "R$251,44", renda: "R$14.401" },
                { nivel: "4ª Série Completa", qtd: "73", pct: "0,2%", freq: "1.70", gasto: "R$278,56", renda: "R$17.241" },
              ].map((row) => (
                <TableRow key={row.nivel}>
                  <TableCell className="text-xs font-medium">{row.nivel}</TableCell>
                  <TableCell className="text-xs text-right">{row.qtd}</TableCell>
                  <TableCell className="text-xs text-right">{row.pct}</TableCell>
                  <TableCell className="text-xs text-right">{row.freq}</TableCell>
                  <TableCell className="text-xs text-right">{row.gasto}</TableCell>
                  <TableCell className="text-xs text-right">{row.renda}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>

    {/* Submenu Estado */}
    <div id="estado" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="text-xl font-semibold text-foreground">Estado</span>
      </div>

      <div className="mt-6 bg-card border border-border rounded-xl p-6">
        <p className="text-sm font-semibold text-foreground mb-4 text-center">Volume de Clientes por Estado e Segmentação de Mercado (Tier)</p>
        <div className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { uf: "SP", total: 14698, tier: "top" },
                { uf: "RJ", total: 3076, tier: "expansao" },
                { uf: "MG", total: 3010, tier: "expansao" },
                { uf: "PR", total: 1908, tier: "expansao" },
                { uf: "SC", total: 1591, tier: "expansao" },
                { uf: "RS", total: 1358, tier: "expansao" },
                { uf: "DF", total: 1324, tier: "expansao" },
                { uf: "GO", total: 883, tier: "expansao" },
                { uf: "BA", total: 867, tier: "expansao" },
                { uf: "PE", total: 691, tier: "expansao" },
                { uf: "ES", total: 518, tier: "expansao" },
                { uf: "CE", total: 450, tier: "expansao" },
                { uf: "MS", total: 389, tier: "expansao" },
                { uf: "MT", total: 353, tier: "expansao" },
                { uf: "PA", total: 226, tier: "secundario" },
                { uf: "AL", total: 193, tier: "secundario" },
                { uf: "MA", total: 186, tier: "secundario" },
                { uf: "RN", total: 183, tier: "secundario" },
                { uf: "PB", total: 171, tier: "secundario" },
                { uf: "PI", total: 115, tier: "secundario" },
                { uf: "AM", total: 114, tier: "secundario" },
                { uf: "SE", total: 100, tier: "secundario" },
                { uf: "TO", total: 89, tier: "secundario" },
                { uf: "RO", total: 68, tier: "secundario" },
                { uf: "AC", total: 20, tier: "secundario" },
                { uf: "RR", total: 18, tier: "secundario" },
                { uf: "AP", total: 14, tier: "secundario" },
              ]}
              margin={{ top: 20, right: 20, left: 10, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="uf" tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} interval={0} />
              <YAxis tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} label={{ value: "Total de Clientes", angle: -90, position: "insideLeft", offset: 0, style: { fill: 'hsl(var(--muted-foreground))', fontSize: 11 } }} />
              <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: 600, marginBottom: 4 }} itemStyle={{ color: 'hsl(var(--foreground))' }} formatter={(value: number) => [value.toLocaleString(), 'Clientes']} />
              <Legend formatter={(value: string) => {
                const labels: Record<string, string> = { top: "Mercados Estratégicos (Top)", expansao: "Mercados em Expansão", secundario: "Mercados Secundários" };
                return labels[value] || value;
              }} />
              <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                {[
                  { uf: "SP", tier: "top" }, { uf: "RJ", tier: "expansao" }, { uf: "MG", tier: "expansao" },
                  { uf: "PR", tier: "expansao" }, { uf: "SC", tier: "expansao" }, { uf: "RS", tier: "expansao" },
                  { uf: "DF", tier: "expansao" }, { uf: "GO", tier: "expansao" }, { uf: "BA", tier: "expansao" },
                  { uf: "PE", tier: "expansao" }, { uf: "ES", tier: "expansao" }, { uf: "CE", tier: "expansao" },
                  { uf: "MS", tier: "expansao" }, { uf: "MT", tier: "expansao" }, { uf: "PA", tier: "secundario" },
                  { uf: "AL", tier: "secundario" }, { uf: "MA", tier: "secundario" }, { uf: "RN", tier: "secundario" },
                  { uf: "PB", tier: "secundario" }, { uf: "PI", tier: "secundario" }, { uf: "AM", tier: "secundario" },
                  { uf: "SE", tier: "secundario" }, { uf: "TO", tier: "secundario" }, { uf: "RO", tier: "secundario" },
                  { uf: "AC", tier: "secundario" }, { uf: "RR", tier: "secundario" }, { uf: "AP", tier: "secundario" },
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.tier === "top" ? "hsl(var(--accent))" : entry.tier === "expansao" ? "hsl(var(--primary))" : "hsl(var(--secondary))"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabela Estados em 4 colunas */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          [
            { uf: "SP", qtd: "14.698", pct: "45,07%" },
            { uf: "RJ", qtd: "3.076", pct: "9,43%" },
            { uf: "MG", qtd: "3.010", pct: "9,23%" },
            { uf: "PR", qtd: "1.908", pct: "5,85%" },
            { uf: "SC", qtd: "1.591", pct: "4,88%" },
            { uf: "RS", qtd: "1.358", pct: "4,16%" },
            { uf: "DF", qtd: "1.324", pct: "4,06%" },
          ],
          [
            { uf: "GO", qtd: "883", pct: "2,71%" },
            { uf: "BA", qtd: "867", pct: "2,66%" },
            { uf: "PE", qtd: "691", pct: "2,12%" },
            { uf: "ES", qtd: "518", pct: "1,59%" },
            { uf: "CE", qtd: "450", pct: "1,38%" },
            { uf: "MS", qtd: "389", pct: "1,19%" },
            { uf: "MT", qtd: "353", pct: "1,08%" },
          ],
          [
            { uf: "PA", qtd: "226", pct: "0,69%" },
            { uf: "AL", qtd: "193", pct: "0,59%" },
            { uf: "MA", qtd: "186", pct: "0,57%" },
            { uf: "RN", qtd: "183", pct: "0,56%" },
            { uf: "PB", qtd: "171", pct: "0,52%" },
            { uf: "PI", qtd: "115", pct: "0,35%" },
            { uf: "AM", qtd: "114", pct: "0,35%" },
          ],
          [
            { uf: "SE", qtd: "100", pct: "0,31%" },
            { uf: "TO", qtd: "89", pct: "0,27%" },
            { uf: "RO", qtd: "68", pct: "0,21%" },
            { uf: "AC", qtd: "20", pct: "0,06%" },
            { uf: "RR", qtd: "18", pct: "0,06%" },
            { uf: "AP", qtd: "14", pct: "0,04%" },
          ],
        ].map((group, gi) => (
          <div key={gi} className="bg-card border border-border rounded-xl px-2 py-4 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="text-foreground font-bold text-xs px-2 w-[50px]">Estado</TableHead>
                  <TableHead className="text-foreground font-bold text-xs text-right px-2">Qtde</TableHead>
                  <TableHead className="text-foreground font-bold text-xs text-right px-2 w-[60px]">%</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.map((row) => (
                  <TableRow key={row.uf}>
                    <TableCell className="text-sm font-medium px-2 py-2">{row.uf}</TableCell>
                    <TableCell className="text-sm text-right px-2 py-2">{row.qtd}</TableCell>
                    <TableCell className="text-sm text-right px-2 py-2">{row.pct}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>

    {/* ==================== RENDA ==================== */}
    <div id="renda" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Renda</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico 1 - Quantidade */}
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Quantidade de Clientes por Faixa de Renda</p>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { faixa: "Até 10k", total: 10359, pct: "(31,8%)" },
                { faixa: "10k a 20k", total: 9335, pct: "(28,6%)" },
                { faixa: "20k a 30k", total: 5186, pct: "(15,9%)" },
                { faixa: "30k a 40k", total: 2587, pct: "(7,9%)" },
                { faixa: "40k a 50k", total: 1755, pct: "(5,4%)" },
                { faixa: "Mais 50k", total: 3381, pct: "(10,4%)" },
              ]} margin={{ top: 30, right: 10, left: 10, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="faixa" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} angle={-25} textAnchor="end" />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} formatter={(value: number) => [value.toLocaleString(), "Clientes"]} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} fill="hsl(var(--primary))">
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "10.359", pct: "(31,8%)" },
                        { qty: "9.335", pct: "(28,6%)" },
                        { qty: "5.186", pct: "(15,9%)" },
                        { qty: "2.587", pct: "(7,9%)" },
                        { qty: "1.755", pct: "(5,4%)" },
                        { qty: "3.381", pct: "(10,4%)" },
                      ];
                      const item = labels[index];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 14} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={11} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={9}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 2 - Gasto Médio */}
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Gasto Médio por Faixa de Renda (R$)</p>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { faixa: "Até 10k", valor: 248 },
                { faixa: "10k a 20k", valor: 286 },
                { faixa: "20k a 30k", valor: 311 },
                { faixa: "30k a 40k", valor: 346 },
                { faixa: "40k a 50k", valor: 340 },
                { faixa: "Mais 50k", valor: 400 },
              ]} margin={{ top: 20, right: 10, left: 10, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="faixa" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} angle={-25} textAnchor="end" />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} formatter={(value: number) => [`R$ ${value}`, "Gasto Médio"]} />
                <Bar dataKey="valor" radius={[4, 4, 0, 0]} fill="hsl(var(--secondary))">
                  <LabelList dataKey="valor" position="top" formatter={(val: number) => `R$${val}`} style={{ fill: "hsl(var(--foreground))", fontSize: 10, fontWeight: 'bold' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico 3 - Frequência Média */}
        <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Frequência Média por Faixa de Renda</p>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { faixa: "Até 10k", freq: 1.51 },
                { faixa: "10k a 20k", freq: 1.62 },
                { faixa: "20k a 30k", freq: 1.66 },
                { faixa: "30k a 40k", freq: 1.82 },
                { faixa: "40k a 50k", freq: 1.68 },
                { faixa: "Mais 50k", freq: 1.80 },
              ]} margin={{ top: 20, right: 10, left: 10, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="faixa" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }} angle={-25} textAnchor="end" />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} domain={[0, 2]} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", color: "hsl(var(--foreground))" }} formatter={(value: number) => [value, "Frequência"]} />
                <Bar dataKey="freq" radius={[4, 4, 0, 0]} fill="hsl(var(--accent))">
                  <LabelList dataKey="freq" position="top" style={{ fill: "hsl(var(--foreground))", fontSize: 10, fontWeight: 'bold' }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabela Resumo */}
        <div className="bg-card border border-border rounded-xl p-6 overflow-auto">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Resumo por Faixa de Renda</p>
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/10">
                <TableHead className="text-foreground font-bold text-[11px] px-2 py-2">Faixa de Renda</TableHead>
                <TableHead className="text-foreground font-bold text-[11px] px-2 py-2 text-right">Clientes</TableHead>
                <TableHead className="text-foreground font-bold text-[11px] px-2 py-2 text-right">Gasto</TableHead>
                <TableHead className="text-foreground font-bold text-[11px] px-2 py-2 text-right">Freq.</TableHead>
                <TableHead className="text-foreground font-bold text-[11px] px-2 py-2 text-right">Renda</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { f: "Até R$10.000", cl: "10.359", g: "R$ 247,59", fr: "1,51", rm: "R$ 6.134" },
                { f: "R$10.001 a R$20.000", cl: "9.335", g: "R$ 286,07", fr: "1,62", rm: "R$ 14.657" },
                { f: "R$20.001 a R$30.000", cl: "5.186", g: "R$ 310,59", fr: "1,66", rm: "R$ 24.486" },
                { f: "R$30.001 a R$40.000", cl: "2.587", g: "R$ 346,34", fr: "1,82", rm: "R$ 34.362" },
                { f: "R$40.001 a R$50.000", cl: "1.755", g: "R$ 339,50", fr: "1,68", rm: "R$ 45.098" },
                { f: "Acima de R$50.000", cl: "3.381", g: "R$ 400,26", fr: "1,80", rm: "R$ 79.868" },
              ].map((row) => (
                <TableRow key={row.f}>
                  <TableCell className="text-xs font-medium px-2 py-2 leading-tight">{row.f}</TableCell>
                  <TableCell className="text-xs text-right px-2 py-2">{row.cl}</TableCell>
                  <TableCell className="text-xs text-right px-2 py-2 whitespace-nowrap">{row.g}</TableCell>
                  <TableCell className="text-xs text-right px-2 py-2">{row.fr}</TableCell>
                  <TableCell className="text-xs text-right px-2 py-2 whitespace-nowrap">{row.rm}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Considerações Renda */}
      <div className="mt-6 bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Considerações</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-6 lg:gap-y-4">
          <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg h-full">
            <p className="text-sm font-bold text-foreground mb-1">1. Faixa: R$1.562 a R$10.000</p>
            <p className="text-sm text-muted-foreground"><strong>Volume:</strong> 10.359 clientes (31,8% da base)</p>
            <p className="text-sm text-muted-foreground"><strong>Gasto Médio:</strong> R$247,59 | <strong>Frequência:</strong> 1,51 | <strong>Renda Média:</strong> R$6.134</p>
            <p className="text-sm text-muted-foreground"><strong>Estratégia:</strong> Maior volume da base. Focar em conversão de primeira compra e "educação" sobre os benefícios das cápsulas.</p>
          </div>
          <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg h-full">
            <p className="text-sm font-bold text-foreground mb-1">2. Faixa: R$10.001 a R$20.000</p>
            <p className="text-sm text-muted-foreground"><strong>Volume:</strong> 9.335 clientes (28,6% da base)</p>
            <p className="text-sm text-muted-foreground"><strong>Gasto Médio:</strong> R$286,07 | <strong>Frequência:</strong> 1,62 | <strong>Renda Média:</strong> R$14.657</p>
            <p className="text-sm text-muted-foreground"><strong>Estratégia:</strong> Segunda maior faixa. Público ideal para assinaturas e kits intermediários.</p>
          </div>
          <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg h-full">
            <p className="text-sm font-bold text-foreground mb-1">3. Faixa: R$20.001 a R$30.000</p>
            <p className="text-sm text-muted-foreground"><strong>Volume:</strong> 5.186 clientes (15,9% da base)</p>
            <p className="text-sm text-muted-foreground"><strong>Gasto Médio:</strong> R$310,59 | <strong>Frequência:</strong> 1,66 | <strong>Renda Média:</strong> R$24.486</p>
            <p className="text-sm text-muted-foreground"><strong>Estratégia:</strong> Gasto e frequência em crescimento. Programas de fidelidade e cross-sell com experiências.</p>
          </div>
          <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg h-full">
            <p className="text-sm font-bold text-foreground mb-1">4. Faixa: R$30.001 a R$40.000</p>
            <p className="text-sm text-muted-foreground"><strong>Volume:</strong> 2.587 clientes (7,9% da base)</p>
            <p className="text-sm text-muted-foreground"><strong>Gasto Médio:</strong> R$346,34 | <strong>Frequência:</strong> 1,82 | <strong>Renda Média:</strong> R$34.362</p>
            <p className="text-sm text-muted-foreground"><strong>Estratégia:</strong> Maior frequência da base. Clube de benefícios e kits premium.</p>
          </div>
          <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg h-full">
            <p className="text-sm font-bold text-foreground mb-1">5. Faixa: R$40.001 a R$50.000</p>
            <p className="text-sm text-muted-foreground"><strong>Volume:</strong> 1.755 clientes (5,4% da base)</p>
            <p className="text-sm text-muted-foreground"><strong>Gasto Médio:</strong> R$339,50 | <strong>Frequência:</strong> 1,68 | <strong>Renda Média:</strong> R$45.098</p>
            <p className="text-sm text-muted-foreground"><strong>Estratégia:</strong> Marketing focado em exclusividade e parcerias com marcas de luxo.</p>
          </div>
          <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg h-full">
            <p className="text-sm font-bold text-foreground mb-1">6. Faixa: R$50.001 a R$99.900</p>
            <p className="text-sm text-muted-foreground"><strong>Volume:</strong> 3.381 clientes (10,4% da base)</p>
            <p className="text-sm text-muted-foreground"><strong>Gasto Médio:</strong> R$400,26 | <strong>Frequência:</strong> 1,80 | <strong>Renda Média:</strong> R$79.868</p>
            <p className="text-sm text-muted-foreground"><strong>Estratégia:</strong> Topo da pirâmide. Atendimento personalizado (Concierge), edições limitadas e experiências exclusivas.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Submenu Conta Bancária Digital */}
    <div id="conta-bancaria-digital" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Conta Bancária Digital</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Tem Conta Bancária Digital?</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 11776 },
                { categoria: "S", total: 20838 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Perfil Digital (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--primary))" />
                  <Cell fill="hsl(var(--accent))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "11.776", pct: "(36,1%)" },
                        { qty: "20.838", pct: "(63,9%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações e Tabela */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col gap-6">
          <div>
            <h3 className="text-base font-bold text-foreground mb-3">O Perfil do Cliente "Digital"</h3>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li><strong className="text-foreground">Renda e Score:</strong> Clientes com conta digital têm uma renda média 23% superior (R$ 25.220 vs R$ 20.378) e um Score de Crédito significativamente maior (823 vs 755).</li>
              <li><strong className="text-foreground">Consumo:</strong> O ticket médio e a frequência de compra são ligeiramente maiores no público digital, sugerindo que a facilidade tecnológica correlaciona-se com uma maior propensão ao e-commerce.</li>
            </ul>
          </div>

          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="text-foreground font-bold text-xs">Perfil Digital</TableHead>
                  <TableHead className="text-foreground font-bold text-xs text-right">Volume de Clientes</TableHead>
                  <TableHead className="text-foreground font-bold text-xs text-right">Renda Média</TableHead>
                  <TableHead className="text-foreground font-bold text-xs text-right">Score Médio</TableHead>
                  <TableHead className="text-foreground font-bold text-xs text-right">Gasto Médio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-sm font-medium">Sim (S)</TableCell>
                  <TableCell className="text-sm text-right">20.838</TableCell>
                  <TableCell className="text-sm text-right">R$ 25.220</TableCell>
                  <TableCell className="text-sm text-right">823</TableCell>
                  <TableCell className="text-sm text-right">R$ 298,96</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-sm font-medium">Não (N)</TableCell>
                  <TableCell className="text-sm text-right">11.776</TableCell>
                  <TableCell className="text-sm text-right">R$ 20.378</TableCell>
                  <TableCell className="text-sm text-right">755</TableCell>
                  <TableCell className="text-sm text-right">R$ 294,13</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>

    {/* Submenu Posse de Imóvel */}
    <div id="posse-de-imovel" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Posse de Imóvel</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Possui Imóvel Próprio?</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 2108 },
                { categoria: "S", total: 30100 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Posse de Imóvel (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--primary))" />
                  <Cell fill="hsl(var(--accent))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "2.108", pct: "(6,5%)" },
                        { qty: "30.100", pct: "(93,5%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">Comparativo de Perfil: Proprietários vs. Não Proprietários</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li><strong className="text-foreground">Poder Aquisitivo:</strong> Clientes que possuem imóvel têm uma renda média 7 vezes superior (R$ 24.901) em relação aos que não possuem (R$ 3.344).</li>
            <li><strong className="text-foreground">Consumo:</strong> Proprietários gastam, em média, R$ 301,38, enquanto não proprietários gastam R$ 238,62. Além disso, compram com maior frequência.</li>
            <li><strong className="text-foreground">Crédito:</strong> O Score de crédito também é superior no grupo dos proprietários (802 vs 758).</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Submenu Posse de Imóvel de Alto Padrão */}
    <div id="posse-de-imovel-alto-padrao" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Posse de Imóvel de Alto Padrão</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Possui Imóvel de Alto Padrão?</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 20100 },
                { categoria: "S", total: 12508 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Imóvel de Alto Padrão (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--secondary))" />
                  <Cell fill="hsl(var(--accent))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "20.100", pct: "(61,6%)" },
                        { qty: "12.508", pct: "(38,4%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-2">O "Salto" Econômico do Alto Padrão</h3>
          <p className="text-sm text-muted-foreground mb-3">O impacto dessa variável na saúde financeira do cliente é drástico:</p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li><strong className="text-foreground">Renda Presumida:</strong> Clientes com imóvel de alto padrão têm uma renda média de R$ 43.109, enquanto o restante da base tem média de R$ 11.664. É uma diferença de quase 4 vezes.</li>
            <li><strong className="text-foreground">Ticket Médio e Gasto:</strong> Eles gastam em média R$ 349,71, um valor 31% superior aos que não possuem esse perfil de imóvel.</li>
            <li><strong className="text-foreground">Frequência:</strong> Também são compradores mais recorrentes (1.75 vs 1.56).</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Submenu Posse de Automóvel */}
    <div id="posse-de-automovel" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Posse de Automóvel</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Possui Automóvel?</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 1300 },
                { categoria: "S", total: 31308 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Posse de Automóvel (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--chart-4))" />
                  <Cell fill="hsl(var(--primary))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "1.300", pct: "(4,0%)" },
                        { qty: "31.308", pct: "(96,0%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">Perfil Socioeconômico e Automóvel</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li><strong className="text-foreground">Renda e Patrimônio:</strong> Clientes com automóvel possuem uma renda média de <strong className="text-foreground">R$ 24.417</strong>, o que é 6 vezes maior do que a renda dos clientes sem veículo (R$ 3.930).</li>
            <li><strong className="text-foreground">Consumo no E-commerce:</strong> Proprietários de veículos gastam, em média, R$ 299,96 e compram com maior frequência (1.64 vs 1.39).</li>
            <li><strong className="text-foreground">Crédito:</strong> O Score de crédito é superior no grupo com carro (800 vs 773).</li>
          </ul>
        </div>
      </div>
    </div>

    {/* ===== PROPRIETÁRIO DE VEÍCULO 0KM ===== */}
    <div id="veiculo-0km" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Proprietário de Veículo 0KM</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Perfil de Veículo Zero KM</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 17332 },
                { categoria: "S", total: 15282 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Veículo Zero KM (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--accent))" />
                  <Cell fill="hsl(var(--primary))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "17.332", pct: "(53,1%)" },
                        { qty: "15.282", pct: "(46,9%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-start">
          <h3 className="text-base font-bold text-foreground mb-3">O Perfil "Zero KM" vs. Mercado de Usados/Não Proprietários</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-6">
            <li><strong className="text-foreground">Poder Aquisitivo Extremo:</strong> Clientes com perfil de veículo Zero KM têm uma renda média de <strong className="text-foreground">R$ 35.920</strong>, quase 3 vezes superior aos que não têm esse perfil (R$ 12.493).</li>
            <li><strong className="text-foreground">Consumo e Ticket Médio:</strong> Esse grupo gasta, em média, R$ 335,59, um valor 27% maior do que os demais. Além disso, eles compram com mais frequência (1.74 vs 1.54).</li>
            <li><strong className="text-foreground">Confiança de Crédito:</strong> O Score de crédito é ligeiramente superior (806 vs 792), indicando bons pagadores.</li>
          </ul>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="text-foreground font-bold text-center">Perfil Veículo</TableHead>
                  <TableHead className="text-foreground font-bold text-center">Volume de Clientes</TableHead>
                  <TableHead className="text-foreground font-bold text-center">Renda Média</TableHead>
                  <TableHead className="text-foreground font-bold text-center">Gasto Médio</TableHead>
                  <TableHead className="text-foreground font-bold text-center">Frequência Média</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center font-medium">Sim (S)</TableCell>
                  <TableCell className="text-center">15.282</TableCell>
                  <TableCell className="text-center">R$35.920</TableCell>
                  <TableCell className="text-center">R$335,59</TableCell>
                  <TableCell className="text-center">1.74</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center font-medium">Não (N)</TableCell>
                  <TableCell className="text-center">17.332</TableCell>
                  <TableCell className="text-center">R$12.493</TableCell>
                  <TableCell className="text-center">R$263,38</TableCell>
                  <TableCell className="text-center">1.54</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>

    {/* ===== COMPORTAMENTO DIGITAL ===== */}
    <div id="comportamento-digital" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Comportamento Digital</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Perfil de Comportamento Digital</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 1100 },
                { categoria: "S", total: 31508 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Comportamento Digital (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--accent))" />
                  <Cell fill="hsl(var(--primary))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "1.100", pct: "(3,4%)" },
                        { qty: "31.508", pct: "(96,6%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">O Impacto do Comportamento Digital</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li><strong className="text-foreground">Renda e Perfil:</strong> Clientes com comportamento digital ativo possuem uma renda média de <strong className="text-foreground">R$ 23.972</strong>, o que é quase 3 vezes superior aos clientes não digitais (R$ 8.337).</li>
            <li><strong className="text-foreground">Conversão e Gasto:</strong> O grupo digital gasta em média R$ 299,17, enquanto o grupo não digital gasta R$ 238,19. Isso reforça que o seu canal de vendas (e-commerce) seleciona naturalmente pessoas que já possuem fluência digital.</li>
            <li><strong className="text-foreground">Frequência:</strong> O cliente digital é mais fiel, com uma frequência de compra média de 1.63 contra 1.46.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* ===== CONSUMO DE LUXO ===== */}
    <div id="consumo-de-luxo" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Consumo de Luxo</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Perfil de Consumo de Luxo</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 4027 },
                { categoria: "S", total: 28587 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Consumo de Luxo (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--secondary))" />
                  <Cell fill="hsl(var(--primary))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "4.027", pct: "(12,4%)" },
                        { qty: "28.587", pct: "(87,6%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-1">O Abismo entre o Consumo de Luxo e o Regular</h3>
          <p className="text-sm font-semibold text-muted-foreground mb-3">A diferença socioeconômica entre os grupos é drástica:</p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-5">
            <li><strong className="text-foreground">Poder Aquisitivo:</strong> O cliente com perfil de luxo tem uma renda média de <strong className="text-foreground">R$ 26.172</strong>, o que é 6 vezes superior à renda dos clientes regulares (R$ 4.285).</li>
            <li><strong className="text-foreground">Investimento no Produto:</strong> O ticket médio do grupo de luxo é R$ 305,36, superando em 27% o grupo regular.</li>
            <li><strong className="text-foreground">Fidelidade:</strong> A frequência de compra também é maior (1.65 vs 1.47), sugerindo que o consumo do produto está integrado a hábitos sociais recorrentes (jantares, eventos, viagens).</li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/20">
                  <th className="border border-border px-3 py-2 text-left font-bold text-foreground">Perfil de Consumo</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Volume de Clientes</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Renda Média</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Gasto Médio (M)</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Score de Crédito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Luxo (S)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">28.587</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$26.172</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$305,36</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">805</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Regular (N)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">4.027</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$4.285</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$239,43</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">755</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* ===== ENTUSIASTAS DE TECNOLOGIA ===== */}
    <div id="entusiastas-de-tecnologia" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Entusiastas de Tecnologia</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Entusiasta de Tecnologia</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 12460 },
                { categoria: "S", total: 20154 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Entusiasta de Tecnologia (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--secondary))" />
                  <Cell fill="hsl(var(--primary))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "12.460", pct: "(38,2%)" },
                        { qty: "20.154", pct: "(61,8%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">O Perfil do "Early Adopter" (Entusiasta de Tecnologia)</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-5">
            <li><strong className="text-foreground">Poder Econômico:</strong> Diferente de outras variáveis, a renda média entre entusiastas (R$ 23.838) e não entusiastas (R$ 22.880) é muito similar. Ou seja, ser entusiasta de tecnologia na sua base não depende apenas de ter mais dinheiro, mas sim de um traço de personalidade.</li>
            <li><strong className="text-foreground">Score de Crédito (O Diferencial):</strong> Aqui está a maior surpresa: entusiastas de tecnologia possuem um Score de Crédito muito superior (937 vs 575). Isso indica que seu público tecnológico é extremamente organizado financeiramente e possui um perfil de risco baixíssimo.</li>
            <li><strong className="text-foreground">Consumo:</strong> Ticket médio e frequência são quase idênticos, o que mostra que o entusiasmo tecnológico não altera "quanto" eles compram, mas "como" eles percebem o valor do produto.</li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/20">
                  <th className="border border-border px-3 py-2 text-left font-bold text-foreground">Perfil Tecnologia</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Volume de Clientes</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Renda Média</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Gasto Médio</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Score de Crédito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sim (S)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">20.154</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$23.838</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$298,24</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">937</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Não (N)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">12.460</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$22.880</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$295,56</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">575</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* ===== APOSTA ONLINE ===== */}
    <div id="aposta-online" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Aposta Online</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Perfil de Aposta Online</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 32001 },
                { categoria: "S", total: 613 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Aposta Online (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--primary))" />
                  <Cell fill="hsl(var(--accent))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "32.001", pct: "(98,1%)" },
                        { qty: "613", pct: "(1,9%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Considerações */}
        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">O Perfil do "Apostador" vs. Restante da Base</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-5">
            <li><strong className="text-foreground">Renda e Score (A Queda Livre):</strong> Este é o grupo com os menores indicadores financeiros. A renda média é de R$ 7.607, enquanto os não apostadores têm média de R$ 23.776 (uma diferença de 3 vezes). O Score de crédito cai drasticamente para 490 (contra 805 do restante da base).</li>
            <li><strong className="text-foreground">Consumo:</strong> O ticket médio é de R$ 224,59, o menor registrado entre todas as segmentações feitas até agora.</li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/20">
                  <th className="border border-border px-3 py-2 text-left font-bold text-foreground">Perfil de Aposta</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Volume de Clientes</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Renda Média</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Gasto Médio</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Score de Crédito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sim (S)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">613</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$7.607</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$224,59</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">490</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Não (N)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">32.001</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$23.776</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$298,61</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">805</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* ===== CLUBE DO VINHO ===== */}
    <div id="clube-do-vinho" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Clube do Vinho</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Perfil Clube do Vinho</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 2469 },
                { categoria: "S", total: 30145 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Pertence a Clube do Vinho (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--chart-4))" />
                  <Cell fill="hsl(var(--accent))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "2.469", pct: "(7,6%)" },
                        { qty: "30.145", pct: "(92,4%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">O Vínculo Direto: Vinho e Bem-estar</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-5">
            <li><strong className="text-foreground">Poder Econômico:</strong> O cliente que pertence a um Clube do Vinho tem uma renda média de <strong className="text-foreground">R$ 25.022</strong>, o que é 5,5 vezes superior à dos não membros (R$ 4.515).</li>
            <li><strong className="text-foreground">Ticket Médio:</strong> Eles gastam em média R$ 301,42, superando o grupo não pertencente em 22%.</li>
            <li><strong className="text-foreground">Frequência e Score:</strong> Além de comprarem mais vezes (1.64 vs 1.48), possuem um Score de crédito superior (805 vs 725).</li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/20">
                  <th className="border border-border px-3 py-2 text-left font-bold text-foreground">Perfil Vinho</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Volume de Clientes</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Renda Média</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Gasto Médio (M)</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Score de Crédito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Membro (S)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">30.145</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$25.022</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$301,42</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">805</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Não Membro (N)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">2.469</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$4.515</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$245,83</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">725</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* ===== POSSE DE MOTO ===== */}
    <div id="posse-de-moto" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Posse de Moto</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Possui Moto?</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 24726 },
                { categoria: "S", total: 7888 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Posse de Moto (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--primary))" />
                  <Cell fill="hsl(var(--secondary))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "24.726", pct: "(75,8%)" },
                        { qty: "7.888", pct: "(24,2%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">Perfil Socioeconômico: Moto vs. Não Moto</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-5">
            <li><strong className="text-foreground">Renda e Patrimônio:</strong> Clientes que possuem moto têm uma renda média de R$ 17.223, enquanto os que não possuem têm média de R$ 25.466.</li>
            <li><strong className="text-foreground">Score de Crédito:</strong> Há uma diferença notável aqui. O grupo que possui moto tem um Score médio de 682, significativamente menor que os 836 do grupo sem moto.</li>
            <li><strong className="text-foreground">Consumo:</strong> O ticket médio de quem tem moto é de <strong className="text-foreground">R$ 280,98</strong>, cerca de 7% menor que o grupo que não possui (R$ 302,40).</li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/20">
                  <th className="border border-border px-3 py-2 text-left font-bold text-foreground">Perfil Moto</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Volume de Clientes</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Renda Média</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Gasto Médio</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Score de Crédito</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Não (N)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">24.726</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$25.466</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$302,40</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">836</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sim (S)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">7.888</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$17.223</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$280,98</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">682</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* ===== FÃS DE CELEBRIDADE ===== */}
    <div id="fas-de-celebridade" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Fãs de Celebridade</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-card border border-border rounded-xl p-6 h-full">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">Distribuição de Clientes: Perfil Fãs de Celebridade</p>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { categoria: "N", total: 2108 },
                { categoria: "S", total: 30506 },
              ]} margin={{ top: 30, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Fãs de Celebridade (S = Sim, N = Não)", position: "insideBottom", offset: -25, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} label={false}>
                  <Cell fill="hsl(var(--accent))" />
                  <Cell fill="hsl(var(--primary))" />
                  <LabelList
                    dataKey="total"
                    position="top"
                    content={({ x, y, width, index }: any) => {
                      const labels = [
                        { qty: "2.108", pct: "(6,5%)" },
                        { qty: "30.506", pct: "(93,5%)" },
                      ];
                      const item = labels[index as number];
                      if (!item) return null;
                      return (
                        <g>
                          <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight={700}>{item.qty}</text>
                          <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>{item.pct}</text>
                        </g>
                      );
                    }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col justify-center">
          <h3 className="text-base font-bold text-foreground mb-3">Perfil "Fã de Celebridade" vs. Restante da Base</h3>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5 mb-5">
            <li><strong className="text-foreground">Poder Econômico:</strong> Clientes com perfil de fã têm uma renda média de <strong className="text-foreground">R$ 24.621</strong>, quase 4 vezes maior do que os que não possuem esse perfil mapeado (R$ 6.802).</li>
            <li><strong className="text-foreground">Consumo e Ticket:</strong> O grupo engajado com celebridades gasta em média R$ 300,92, um valor 23% superior. Eles também compram com maior frequência (1.64 vs 1.45).</li>
            <li><strong className="text-foreground">Crédito:</strong> O Score de crédito é praticamente idêntico entre os dois grupos (~799), o que mostra que o interesse por celebridades atravessa diferentes faixas de risco de crédito, mas está fortemente concentrado na classe média-alta/alta.</li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/20">
                  <th className="border border-border px-3 py-2 text-left font-bold text-foreground">Perfil Celebridade</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Volume de Clientes</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Renda Média</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Gasto Médio (M)</th>
                  <th className="border border-border px-3 py-2 text-center font-bold text-foreground">Frequência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sim (S)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">30.506</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$24.621</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$300,92</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">1.64</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Não (N)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">2.108</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$6.802</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$243,58</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">1.45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* ===== VIAGENS E TURISMO ===== */}
    <div id="viagens-e-turismo" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Viagens e Turismo</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Gráfico */}
        <div className="bg-card rounded-xl border border-border p-6 h-full">
          <h3 className="text-sm font-bold text-foreground mb-4 text-center">Perfil de Viagens e Turismo</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={[
              { categoria: "N", total: 1919 },
              { categoria: "S", total: 30695 },
            ]} margin={{ top: 40, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="categoria" tick={{ fill: "hsl(var(--foreground))", fontSize: 13 }} label={{ value: "Viagens e Turismo (S = Sim, N = Não)", position: "insideBottom", offset: -10, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
              <YAxis tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }} label={{ value: "Número de Clientes", angle: -90, position: "insideLeft", offset: 0, fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
              <Tooltip labelStyle={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }} />
              <Bar dataKey="total" radius={[4, 4, 0, 0]}>
                <Cell fill="hsl(var(--accent))" />
                <Cell fill="hsl(var(--primary))" />
                <LabelList dataKey="total" position="top" content={({ x, y, width, value, index }: any) => {
                  const pcts = ["5.9%", "94.1%"];
                  return (
                    <g>
                      <text x={x + width / 2} y={y - 18} textAnchor="middle" fill="hsl(var(--foreground))" fontSize={13} fontWeight="bold">
                        {Number(value).toLocaleString("pt-BR")}
                      </text>
                      <text x={x + width / 2} y={y - 4} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize={11}>
                        ({pcts[index]})
                      </text>
                    </g>
                  );
                }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Considerações */}
        <div className="bg-card rounded-xl border border-border p-6 h-full">
          <h3 className="text-base font-bold text-foreground mb-4">O Perfil do Viajante vs. Não Viajante</h3>
          <ul className="space-y-3 text-sm text-muted-foreground mb-6">
            <li className="flex gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Poder Econômico:</strong> Clientes que viajam têm uma renda média de <strong className="text-foreground">R$ 24.552</strong>, o que é 4 vezes superior à dos não viajantes (R$ 6.151).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Consumo e LTV:</strong> Viajantes gastam em média R$ 300,44, enquanto os não viajantes gastam R$ 245,61. Além disso, a frequência de compra é superior no grupo de viajantes (1.64 vs 1.44).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">•</span>
              <span><strong className="text-foreground">Crédito:</strong> O Score de crédito também acompanha o perfil, sendo maior no grupo que viaja (800 vs 782).</span>
            </li>
          </ul>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">Perfil de Viagens</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Volume de Clientes</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Renda Média</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Gasto Médio</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Score de Crédito</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-card">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Sim (S)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">30.695</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$24.552</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$300,44</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">800</td>
                </tr>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Não (N)</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">1.919</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$6.151</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">R$245,61</td>
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">782</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* ==================== PERSONAS ==================== */}
    <div id="personas" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Personas</span>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Metodologia</h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>Testamos <strong className="text-foreground">KMeans</strong> vs <strong className="text-foreground">Gaussian Mixture (GMM)</strong> com K de 2 a 8, usando <strong className="text-foreground">19 features</strong>: Qtde Compras, Valor Total, Ticket, Renda, Idade, Score + 13 perfis comportamentais.</li>
          <li><strong className="text-foreground">Métricas avaliadas:</strong> Silhouette Score, Calinski-Harabasz e Davies-Bouldin.</li>
          <li><strong className="text-foreground">Resultado:</strong> KMeans venceu — mais estável e interpretável. O GMM oscilou muito entre valores de K.</li>
        </ul>
      </div>

      {/* Row 1: Masculinas — KMeans + Árvore */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-5">Personas Masculinas — KMeans (K=5)</h3>
          <div className="space-y-5">
            {[
              { nome: "Jovem Econômico", qtd: "1.015", pct: "5,5%", idade: "médio: 36 (80% concentrados entre 24 e 49 anos)", renda: "R$4.983", gasto: "R$240", freq: "1,44", perfil: "Alta posse de moto (84%), digital (64%). Sem luxo nem imóvel alto padrão.", campanha: "Entrada com preço acessível, comunicação jovem e prática." },
              { nome: "Adulto Conectado", qtd: "6.718", pct: "36,2%", idade: "média: 39 (80% concentrados entre 31 e 48 anos)", renda: "R$15.581", gasto: "R$239", freq: "1,47", perfil: "Score alto (947), possui imóvel e automóvel. Viajante, clube do vinho.", campanha: "Assinaturas, kits intermediários, cross-sell com experiências." },
              { nome: "Profissional Maduro", qtd: "4.391", pct: "23,6%", idade: "média: 44 (80% concentrados entre 35 e 54 anos)", renda: "R$23.196", gasto: "R$239", freq: "1,43", perfil: "Score baixo (469), mas renda boa. Não é entusiasta de tecnologia.", campanha: "Reativação e educação de marca, canais offline." },
              { nome: "Heavy Buyer", qtd: "554", pct: "3,0%", idade: "média: 46 (80% concentrados entre 37 e 58 anos)", renda: "R$35.451", gasto: "R$2.489", freq: "9,06", perfil: "Os super-compradores. Maior LTV da base masculina de longe.", campanha: "Tratamento VIP, edições limitadas, programa de embaixadores." },
              { nome: "Sênior Premium", qtd: "5.904", pct: "31,8%", idade: "média: 50 (80% concentrados entre 40 e 62 anos)", renda: "R$45.487", gasto: "R$270", freq: "1,52", perfil: "100% luxo, vinho, celebridade. Mais alta renda, mas compra pouco.", campanha: "Exclusividade, kits premium, parcerias com marcas de luxo." },
            ].map((p, i) => (
              <div key={i} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <h4 className="text-sm font-bold text-foreground mb-1">Persona {i + 1}: {p.nome} <span className="font-normal text-muted-foreground">({p.qtd} | {p.pct})</span></h4>
                <p className="text-xs text-muted-foreground mb-1">Idade {p.idade.includes('méd') ? p.idade : `: ${p.idade}`} | Renda: <strong className="text-foreground">{p.renda}</strong> | Gasto: <strong className="text-foreground">{p.gasto}</strong> | Freq: <strong className="text-foreground">{p.freq}</strong></p>
                <p className="text-xs text-muted-foreground mb-1"><strong className="text-foreground">Perfil:</strong> {p.perfil}</p>
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Campanha:</strong> {p.campanha}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-3">Personas Femininas — KMeans (K=4)</h3>
          <div className="space-y-5">
            {[
              { nome: "Jovem Econômica", qtd: "1.348", pct: "9,7%", idade: "média: 39 (80% concentradas entre 25 e 53 anos)", renda: "R$4.064", gasto: "R$229", freq: "1,38", perfil: "Baixa penetração em quase todos os perfis. Digital como ponto forte (79%).", campanha: "Primeiro contato, promoções e facilidades de pagamento." },
              { nome: "Adulta Prática", qtd: "6.001", pct: "43,1%", idade: "média: 41 (80% concentradas entre 32 e 51 anos)", renda: "R$12.640", gasto: "R$240", freq: "1,46", perfil: "Score alto (905), viajante, clube do vinho. Massa principal.", campanha: "Assinaturas e programas de fidelidade, kits presentes." },
              { nome: "Profissional Engajada", qtd: "3.156", pct: "22,7%", idade: "média: 47 (80% concentradas entre 36 e 61 anos)", renda: "R$14.589", gasto: "R$253", freq: "1,52", perfil: "Score baixo (481), mas boa frequência. Não usa tecnologia.", campanha: "CRM pós-venda, canais tradicionais, cupons de recompra." },
              { nome: "Sênior Premium", qtd: "3.421", pct: "24,6%", idade: "média: 48 (80% concentradas entre 40 e 59 anos)", renda: "R$39.819", gasto: "R$364", freq: "1,75", perfil: "100% luxo, vinho, celebridade. Maior gasto e frequência.", campanha: "Exclusividade, experiências premium, parcerias de luxo." },
            ].map((p, i) => (
              <div key={i} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                <h4 className="text-sm font-bold text-foreground mb-1">Persona {i + 1}: {p.nome} <span className="font-normal text-muted-foreground">({p.qtd} | {p.pct})</span></h4>
                <p className="text-xs text-muted-foreground mb-1">Idade {p.idade} | Renda: <strong className="text-foreground">{p.renda}</strong> | Gasto: <strong className="text-foreground">{p.gasto}</strong> | Freq: <strong className="text-foreground">{p.freq}</strong></p>
                <p className="text-xs text-muted-foreground mb-1"><strong className="text-foreground">Perfil:</strong> {p.perfil}</p>
                <p className="text-xs text-muted-foreground"><strong className="text-foreground">Campanha:</strong> {p.campanha}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>

    {/* ==================== AQUÁRIO DE PERSONAS ==================== */}
    <div id="aquario-de-personas" className="mt-10 scroll-mt-6">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3 mb-6">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span className="text-xl font-semibold text-foreground">Aquário de Personas</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tabela */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Quantidade de Pessoas por Persona e Decil</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">PersonaId</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Decil 1</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Decil 2</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Decil 3</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Decil 4</th>
                  <th className="border border-border px-3 py-2 text-center font-semibold text-foreground">Decil 5</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { persona: "Pers_1", d1: "1.25M", d2: "1.54M", d3: "1.4M", d4: "723k", d5: "504k" },
                  { persona: "Pers_2", d1: "40.4k", d2: "672k", d3: "2.38M", d4: "3.03M", d5: "2.95M" },
                  { persona: "Pers_3", d1: "33.5k", d2: "92.4k", d3: "209k", d4: "277k", d5: "556k" },
                  { persona: "Pers_4", d1: "", d2: "6.08k", d3: "228k", d4: "977k", d5: "2.26M" },
                  { persona: "Pers_5", d1: "", d2: "8.38k", d3: "410k", d4: "2.13M", d5: "5.56M" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{row.persona}</td>
                    <td className="border border-border px-3 py-2 text-center text-muted-foreground">{row.d1}</td>
                    <td className="border border-border px-3 py-2 text-center text-muted-foreground">{row.d2}</td>
                    <td className="border border-border px-3 py-2 text-center text-muted-foreground">{row.d3}</td>
                    <td className="border border-border px-3 py-2 text-center text-muted-foreground">{row.d4}</td>
                    <td className="border border-border px-3 py-2 text-center text-muted-foreground">{row.d5}</td>
                  </tr>
                ))}
                <tr className="bg-primary/10 font-bold">
                  <td className="border border-border px-3 py-2 text-right text-foreground">Total (Soma)</td>
                  <td className="border border-border px-3 py-2 text-center text-foreground">1.33M</td>
                  <td className="border border-border px-3 py-2 text-center text-foreground">2.32M</td>
                  <td className="border border-border px-3 py-2 text-center text-foreground">4.63M</td>
                  <td className="border border-border px-3 py-2 text-center text-foreground">7.14M</td>
                  <td className="border border-border px-3 py-2 text-center text-foreground">11.8M</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Gráfico de barras agrupadas */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Distribuição por Decil</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { decil: "Decil 1", total: 1323900 },
                { decil: "Decil 2", total: 2318860 },
                { decil: "Decil 3", total: 4627000 },
                { decil: "Decil 4", total: 7137000 },
                { decil: "Decil 5", total: 11830000 },
              ]} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="decil" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} tickFormatter={(v: number) => v >= 1000000 ? `${(v / 1000000).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)} />
                <Tooltip formatter={(value: number) => value >= 1000000 ? `${(value / 1000000).toFixed(2)}M` : value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value)} contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} itemStyle={{ color: "#00a39e" }} />
                <Bar dataKey="total" name="Total" radius={[2, 2, 0, 0]}>
                  {["#00a39e", "#8013ba", "#361e63", "#43438c", "#17082d"].map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>

  </DashboardLayout>
  );
};

export default ModelagemEstatistica;
