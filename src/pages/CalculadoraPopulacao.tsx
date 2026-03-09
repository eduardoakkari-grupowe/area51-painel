import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const UNIV_TOTAL_TV_ABERTA = 205482688.0;

const parseValue = (v: string) => {
  if (!v) return 0;
  const cleaned = v.replace(/R\$\s?/g, "").replace(/\./g, "").replace(",", ".");
  return parseFloat(cleaned) || 0;
};

const formatBig = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const formatPct = (n: number) =>
  (n * 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

interface ResultData {
  universoTarget: number;
  cpp: number;
  reach1Abs: number;
  impacts1: number;
  cpmAud1: number;
  cpmImp1: number;
  reach3Abs: number;
  impacts3: number;
  cpmAud3: number;
  cpmImp3: number;
  repTarget: number;
  totalLiquido: number;
  trp: number;
  alcance1: number;
  frequencia1: number;
  alcance3: number;
  frequencia3: number;
}

const ResultCard = ({ label, value }: { label: string; value: string }) => (
  <div className="border border-border rounded-xl p-4">
    <span className="text-xs text-muted-foreground">{label}</span>
    <p className="text-lg font-bold mt-1 text-primary">{value}</p>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 mb-3">
    <h3 className="text-base font-bold text-foreground">{children}</h3>
    <div className="border-b border-border mt-1" />
  </div>
);

const CalculadoraPopulacao = () => {
  const [form, setForm] = useState({
    repTarget: "23,66",
    totalLiquido: "5.000.000",
    trp: "500",
    alcance1: "17,00",
    frequencia1: "5",
    alcance3: "7,46",
    frequencia3: "7",
  });

  const [resultado, setResultado] = useState<ResultData | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCalcular = () => {
    const repTarget = parseValue(form.repTarget) / 100;
    const totalLiquido = parseValue(form.totalLiquido);
    const trp = parseValue(form.trp);
    const alcance1 = parseValue(form.alcance1) / 100;
    const frequencia1 = parseValue(form.frequencia1);
    const alcance3 = parseValue(form.alcance3) / 100;
    const frequencia3 = parseValue(form.frequencia3);

    const universoTarget = UNIV_TOTAL_TV_ABERTA * repTarget;
    const cpp = trp ? totalLiquido / trp : 0;
    const reach1Abs = universoTarget * alcance1;
    const impacts1 = reach1Abs * frequencia1;
    const cpmAud1 = reach1Abs ? (totalLiquido / reach1Abs) * 1000 : 0;
    const cpmImp1 = impacts1 ? (totalLiquido / impacts1) * 1000 : 0;
    const reach3Abs = universoTarget * alcance3;
    const impacts3 = reach3Abs * frequencia3;
    const cpmAud3 = reach3Abs ? (totalLiquido / reach3Abs) * 1000 : 0;
    const cpmImp3 = impacts3 ? (totalLiquido / impacts3) * 1000 : 0;

    setResultado({
      universoTarget, cpp, reach1Abs, impacts1, cpmAud1, cpmImp1,
      reach3Abs, impacts3, cpmAud3, cpmImp3,
      repTarget, totalLiquido, trp, alcance1, frequencia1, alcance3, frequencia3,
    });
  };

  const chartData = resultado
    ? [
        { name: "Universo Total TV Aberta", value: UNIV_TOTAL_TV_ABERTA },
        { name: "Universo Target", value: resultado.universoTarget },
      ]
    : [];

  const COLORS = ["#991b1b", "#ef4444"];

  const formatTick = (v: number) => {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(0)} M`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(0)} k`;
    return String(v);
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-extrabold text-foreground uppercase tracking-tight">
          Calculadora de População Projetada
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Ferramenta para cálculo de projeção de população com base em dados do AD Mídia. Desenvolvido por Vitor Coppe + WDI + Eduardo Akkari.
        </p>
      </div>

      {/* Dados Iniciais */}
      <div className="glass-card mt-6 p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Dados Iniciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Representatividade do target (%)</Label>
            <Input value={form.repTarget} onChange={(e) => handleChange("repTarget", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Total líquido (R$)</Label>
            <Input value={form.totalLiquido} onChange={(e) => handleChange("totalLiquido", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>TRP</Label>
            <Input value={form.trp} onChange={(e) => handleChange("trp", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Alcance1+ - Reach1+ (%)</Label>
            <Input value={form.alcance1} onChange={(e) => handleChange("alcance1", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Frequência - Frequency1+</Label>
            <Input value={form.frequencia1} onChange={(e) => handleChange("frequencia1", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Alcance3+ - Reach3+ (%)</Label>
            <Input value={form.alcance3} onChange={(e) => handleChange("alcance3", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Frequência3+ - Frequency3+</Label>
            <Input value={form.frequencia3} onChange={(e) => handleChange("frequencia3", e.target.value)} />
          </div>
        </div>

        <Button onClick={handleCalcular} className="mt-6">CALCULAR</Button>

        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
          <p><strong className="text-foreground">Representatividade do target (%)</strong> = é a remuneração devida sobre o ganho obtido pela redução do CPA em cada Campanha.</p>
          <p><strong className="text-foreground">Total líquido (R$)</strong> = é o montante já pago a título de Success Fee vinculado a uma Campanha específica.</p>
          <p><strong className="text-foreground">TRP</strong> = é o custo atual de aquisição de novos contratos de clientes pela CONTRATANTE = R$ 400,00</p>
          <p><strong className="text-foreground">Alcance1+ - Reach1+ (%)</strong> = número de novos contratos de clientes oriundos da Campanha desde seu início, independentemente do número de vidas por contrato.</p>
          <p><strong className="text-foreground">Frequência - Frequency1+</strong> = verba de mídia destinada exclusivamente à Campanha voltada às bases fornecidas pela CONTRATADA.</p>
          <p><strong className="text-foreground">Alcance3+ - Reach3+ (%)</strong> = verba de mídia destinada exclusivamente à Campanha voltada às bases fornecidas pela CONTRATADA.</p>
          <p><strong className="text-foreground">Frequência3+ - Frequency3+</strong> = verba de mídia destinada exclusivamente à Campanha voltada às bases fornecidas pela CONTRATADA.</p>
        </div>
      </div>

      {/* Resultados */}
      {resultado && (
        <div className="glass-card mt-6 p-6">
          <h2 className="text-lg font-bold text-foreground mb-2">Resultado do Cálculo</h2>

          <SectionTitle>Dados de Entrada</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard label="Universo Total TV Aberta (CONSTANTE)" value={formatBig(UNIV_TOTAL_TV_ABERTA)} />
            <ResultCard label="Representatividade do target (%)" value={`${formatPct(resultado.repTarget)}%`} />
            <ResultCard label="Total líquido (R$)" value={`R$ ${formatBig(resultado.totalLiquido)}`} />
            <ResultCard label="TRP" value={formatBig(resultado.trp)} />
            <ResultCard label="Alcance1+ - Reach1+ (%)" value={`${formatPct(resultado.alcance1)}%`} />
            <ResultCard label="Frequência - Frequency1+" value={formatBig(resultado.frequencia1)} />
            <ResultCard label="Alcance3+ - Reach3+ (%)" value={`${formatPct(resultado.alcance3)}%`} />
            <ResultCard label="Frequência3+ - Frequency3+" value={formatBig(resultado.frequencia3)} />
          </div>

          <SectionTitle>Métricas Calculadas</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard label="Universo Target" value={formatBig(resultado.universoTarget)} />
            <ResultCard label="Custo Por Ponto (CPP)" value={`R$ ${formatBig(resultado.cpp)}`} />
          </div>

          <SectionTitle>Resultados para Reach 1+</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard label="Alcance1+ - Reach1+ (absoluto)" value={formatBig(resultado.reach1Abs)} />
            <ResultCard label="Impactos 1+" value={formatBig(resultado.impacts1)} />
            <ResultCard label="CPM Audiência Líquida 1+" value={`R$ ${formatBig(resultado.cpmAud1)}`} />
            <ResultCard label="CPM Impactos 1+" value={`R$ ${formatBig(resultado.cpmImp1)}`} />
          </div>

          <SectionTitle>Resultados para Reach 3+</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard label="Alcance3+ - Reach3+ (absoluto)" value={formatBig(resultado.reach3Abs)} />
            <ResultCard label="Impactos 3+" value={formatBig(resultado.impacts3)} />
            <ResultCard label="CPM Audiência Líquida 3+" value={`R$ ${formatBig(resultado.cpmAud3)}`} />
            <ResultCard label="CPM Impactos 3+" value={`R$ ${formatBig(resultado.cpmImp3)}`} />
          </div>
        </div>
      )}

      {/* Gráfico */}
      {resultado && (
        <div className="glass-card mt-6 p-6">
          <h3 className="text-base font-bold text-foreground mb-4">Universo: Comparação Gráfica</h3>
          <div className="border-t border-border mb-4" />
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} layout="vertical" margin={{ left: 60, right: 30, top: 10, bottom: 10 }}>
                <XAxis type="number" tickFormatter={formatTick} tick={{ fill: "#9ca3af", fontSize: 12 }} />
                <YAxis type="category" dataKey="name" tick={{ fill: "#e5e7eb", fontSize: 12 }} width={180} />
                <Tooltip
                  formatter={(value: number) => value.toLocaleString("pt-BR")}
                  contentStyle={{ backgroundColor: "hsl(220, 18%, 13%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8 }}
                  labelStyle={{ color: "#e5e7eb" }}
                  itemStyle={{ color: "#e5e7eb" }}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={80}>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default CalculadoraPopulacao;
