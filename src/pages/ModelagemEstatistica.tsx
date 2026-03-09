import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, ShoppingCart, AlertTriangle, Code, UsersRound, SearchCheck, Share2, Target, Crosshair, Brain, UsersIcon } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
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

const idadeDistribuicao  = [
  { idade: 20, frequencia: 150 }, { idade: 22, frequencia: 280 },
  { idade: 25, frequencia: 700 }, { idade: 28, frequencia: 950 },
  { idade: 30, frequencia: 1950 }, { idade: 32, frequencia: 2500 },
  { idade: 35, frequencia: 3500 }, { idade: 37, frequencia: 3600 },
  { idade: 38, frequencia: 3150 }, { idade: 40, frequencia: 4000 },
  { idade: 42, frequencia: 4700 }, { idade: 44, frequencia: 3900 },
  { idade: 45, frequencia: 3100 }, { idade: 48, frequencia: 3800 },
  { idade: 50, frequencia: 3200 }, { idade: 52, frequencia: 2200 },
  { idade: 55, frequencia: 2000 }, { idade: 58, frequencia: 2100 },
  { idade: 60, frequencia: 1500 }, { idade: 62, frequencia: 1050 },
  { idade: 65, frequencia: 800 }, { idade: 68, frequencia: 500 },
  { idade: 70, frequencia: 400 }, { idade: 75, frequencia: 250 },
  { idade: 80, frequencia: 150 }, { idade: 85, frequencia: 80 },
  { idade: 90, frequencia: 30 },
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

      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        {/* Left: Histogram */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground mb-1">Idade (Homens e Mulheres)</h3>
          <p className="text-xs text-muted-foreground mb-4">Distribuição de Idade dos Compradores</p>
          <div className="w-full h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={idadeDistribuicao} margin={{ top: 5, right: 20, left: 10, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="idade" label={{ value: "Idade", position: "insideBottom", offset: -15, style: { fill: 'hsl(var(--muted-foreground))' } }} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis label={{ value: "Frequência", angle: -90, position: "insideLeft", offset: 0, style: { fill: 'hsl(var(--muted-foreground))' } }} tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--foreground))' }} />
                <Bar dataKey="frequencia" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Insights + Table */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-primary mb-3">O Perfil Geracional e o Consumo</h3>
          <ul className="space-y-3 mb-6">
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

          {/* Table */}
          <div className="overflow-auto">
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
      </div>
    </div>
  </DashboardLayout>
  );
};

export default ModelagemEstatistica;
