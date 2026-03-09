import { DashboardLayout } from "@/components/DashboardLayout";
import { useState, useRef, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Download, RotateCcw } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

// ── Types ──
interface Canal {
  nome: string;
  alcance: string; // abs people
  impactos: string;
  custo: string;
  penetracao: string;
}

interface CanalResult {
  name: string;
  adjReach: number;
  absReach: number;
  impacts: number;
  grp: number;
  cost: number;
  cpm: number;
  reachPct: number;
  freq: number;
}

interface Totals {
  reach: number;
  uniq: number;
  freq: number;
  imp: number;
  cost: number;
  grp: number;
  cpm: number;
  cppa: number;
  cpp: number;
  universe: number;
  items: CanalResult[];
}

// ── Helpers ──
const fmtInt = (n: number) =>
  (isFinite(n) ? Math.round(n) : 0).toLocaleString("pt-BR");
const fmtNum = (n: number) =>
  (isFinite(n) ? n : 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtBRL = (n: number) =>
  "R$ " + (isFinite(n) ? n : 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const parseUniverse = (s: string) => {
  const t = String(s || "").replace(/[^0-9]/g, "");
  return Number(t) || 0;
};

const parseNumTol = (s: string | number | undefined) => {
  if (s == null) return 0;
  let t = String(s).trim();
  if (!t) return 0;
  const hasDot = t.includes(".");
  const hasComma = t.includes(",");
  if (hasDot && hasComma) {
    t = t.replace(/\./g, "").replace(",", ".");
  } else if (hasComma && !hasDot) {
    t = t.replace(",", ".");
  } else {
    t = t.replace(/[^0-9.\-]/g, "");
  }
  const n = Number(t);
  return Number.isFinite(n) ? n : 0;
};

const normKey = (s = "") =>
  String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "").replace(/[^a-z0-9%]/g, "");

const emptyCanal = (): Canal => ({
  nome: "",
  alcance: "",
  impactos: "",
  custo: "",
  penetracao: "100",
});

const stripBOM = (s: string) => (s && s.charCodeAt(0) === 0xfeff ? s.slice(1) : s);

// ── CSV Parsing ──
const detectDelimiter = (lines: string[]) => {
  const counts: Record<string, number> = { ",": 0, ";": 0, "\t": 0, "|": 0 };
  for (let i = 0; i < Math.min(5, lines.length); i++) {
    const s = lines[i].trim();
    if (!s) continue;
    for (const d of Object.keys(counts)) {
      counts[d] += (s.match(new RegExp("\\" + d, "g")) || []).length;
    }
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] || ";";
};

const parseCSVSmart = (text: string): string[][] => {
  text = stripBOM(text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const allLines = text.split("\n");
  if (/^sep=./i.test(allLines[0] || "")) allLines.shift();
  while (allLines.length && !allLines[0].trim()) allLines.shift();
  while (allLines.length && !allLines[allLines.length - 1].trim()) allLines.pop();
  if (!allLines.length) return [];

  const delim = detectDelimiter(allLines);
  const rows: string[][] = [];
  for (const line of allLines) {
    const out: string[] = [];
    let i = 0, cur = "", inQ = false;
    while (i < line.length) {
      const ch = line[i];
      if (inQ) {
        if (ch === '"') {
          if (line[i + 1] === '"') { cur += '"'; i += 2; continue; }
          inQ = false; i++; continue;
        }
        cur += ch; i++; continue;
      }
      if (ch === '"') { inQ = true; i++; continue; }
      if (ch === delim) { out.push(cur); cur = ""; i++; continue; }
      cur += ch; i++;
    }
    out.push(cur);
    if (out.some((c) => (c || "").trim() !== "")) rows.push(out);
  }
  return rows;
};

// ── Sort options ──
type SortKey = "name-asc" | "name-desc" | "abs-desc" | "abs-asc" | "cov-desc" | "cov-asc" | "freq-desc" | "freq-asc" | "cpm-asc" | "cpm-desc" | "cost-desc" | "cost-asc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "name-asc", label: "Alfabética (A→Z)" },
  { value: "name-desc", label: "Alfabética (Z→A)" },
  { value: "abs-desc", label: "Alcance absoluto (maior→menor)" },
  { value: "abs-asc", label: "Alcance absoluto (menor→maior)" },
  { value: "cov-desc", label: "Cobertura (%) (maior→menor)" },
  { value: "cov-asc", label: "Cobertura (%) (menor→maior)" },
  { value: "freq-desc", label: "Frequência (maior→menor)" },
  { value: "freq-asc", label: "Frequência (menor→maior)" },
  { value: "cpm-asc", label: "CPM (menor→maior)" },
  { value: "cpm-desc", label: "CPM (maior→menor)" },
  { value: "cost-desc", label: "Custo (maior→menor)" },
  { value: "cost-asc", label: "Custo (menor→maior)" },
];

// ── Components ──
const ResultCard = ({ label, value, hint }: { label: string; value: string; hint?: string }) => (
  <div className="border border-border rounded-xl p-4">
    <span className="text-xs text-muted-foreground">{label}</span>
    <p className="text-lg font-bold mt-1 text-primary">{value}</p>
    {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-6 mb-3">
    <h3 className="text-base font-bold text-foreground">{children}</h3>
    <div className="border-b border-border mt-1" />
  </div>
);

const CHART_COLORS = ["#991b1b", "#ef4444"];

// ── Main Component ──
const CalculadoraSainsbury = () => {
  const [nomePlano, setNomePlano] = useState("");
  const [target, setTarget] = useState("");
  const [universoTarget, setUniversoTarget] = useState("");
  const [canais, setCanais] = useState<Canal[]>([emptyCanal()]);
  const [resultado, setResultado] = useState<Totals | null>(null);
  const [csvDiag, setCsvDiag] = useState("Aguardando arquivo ou texto…");
  const [diagOpen, setDiagOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>("name-asc");
  const [error, setError] = useState("");
  const [warnings, setWarnings] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const addCanal = () => setCanais((prev) => [...prev, emptyCanal()]);
  const removeCanal = (i: number) => setCanais((prev) => prev.filter((_, idx) => idx !== i));
  const updateCanal = (i: number, field: keyof Canal, value: string) =>
    setCanais((prev) => prev.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)));

  const handleReset = () => {
    setNomePlano(""); setTarget(""); setUniversoTarget("");
    setCanais([emptyCanal()]); setResultado(null);
    setCsvDiag("Aguardando arquivo ou texto…"); setError(""); setWarnings([]);
  };

  const limparCanais = () => { setCanais([emptyCanal()]); setResultado(null); };

  // ── CSV Load ──
  const loadCSVRows = useCallback((rows: string[][]) => {
    const header = rows[0].map((c) => (c || "").trim());
    const norm = header.map((h) => normKey(h));
    const map: Record<string, number> = {};

    header.forEach((raw, idx) => {
      const k = normKey(raw);
      if (k.includes("canal") || k === "channel") map.name = idx;
      else if (k.startsWith("pessoas") || k.includes("alcance(abs)") || k.includes("pessoasplano") || k.includes("pessoasdop") || k.includes("pessoasdocanal")) map.people = idx;
      else if (k.startsWith("impact") || k === "imp") map.imp = idx;
      else if (k.startsWith("alcance") || k === "reach") map.reach = idx;
      else if (k.startsWith("frequencia") || k === "freq" || k === "frequency") map.freq = idx;
      else if (k.startsWith("custo") || k === "cost" || k === "investimento") map.cost = idx;
      else if (k.startsWith("penetracao") || k === "penetration" || k === "pen") map.pen = idx;
    });

    const hasPeople = map.people != null && map.imp != null;
    const hasLegacy = map.reach != null && map.freq != null;

    if (!hasPeople && !hasLegacy && header.length === 5) {
      map.name = 0; map.reach = 1; map.freq = 2; map.cost = 3; map.pen = 4;
    }

    if (map.name == null || (!hasPeople && !hasLegacy && !(map.reach != null && map.freq != null))) {
      throw new Error("Cabeçalhos não reconhecidos.");
    }

    const newCanais: Canal[] = [];
    rows.slice(1).forEach((r) => {
      if (!r || !r.some((c) => (c || "").trim())) return;
      if (hasPeople) {
        newCanais.push({
          nome: r[map.name] || "",
          alcance: r[map.people] || "0",
          impactos: r[map.imp] || "0",
          custo: map.cost != null ? r[map.cost] || "0" : "0",
          penetracao: map.pen != null ? String(parseNumTol(r[map.pen]) || 100) : "100",
        });
      } else {
        // Legacy: calculate impactos from alcance * frequência
        const alcVal = parseNumTol(r[map.reach!]);
        const freqVal = parseNumTol(r[map.freq!]);
        const uni = parseUniverse(universoTarget);
        const people = Math.round(uni * (alcVal / 100));
        const imp = Math.round(people * freqVal);
        newCanais.push({
          nome: r[map.name] || "",
          alcance: String(people),
          impactos: String(imp),
          custo: map.cost != null ? r[map.cost] || "0" : "0",
          penetracao: map.pen != null ? String(parseNumTol(r[map.pen]) || 100) : "100",
        });
      }
    });

    if (newCanais.length > 0) {
      setCanais(newCanais);
      setCsvDiag(`CSV carregado (modo ${hasPeople ? "Pessoas/Impactos" : "Legacy"}). ${newCanais.length} canal(is) encontrado(s).`);
    } else {
      setCsvDiag("CSV sem dados úteis.");
    }
  }, [universoTarget]);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setDiagOpen(true);
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target?.result as string;
        if (!text) throw new Error("Falha ao ler arquivo.");
        const rows = parseCSVSmart(text);
        if (rows.length < 2) throw new Error("CSV sem dados úteis.");
        loadCSVRows(rows);
        setError("");
      } catch (err: any) {
        setCsvDiag("Erro: " + (err.message || "Falha ao ler CSV"));
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }, [loadCSVRows]);

  // ── Calculate ──
  const handleCalc = useCallback(() => {
    try {
      setError("");
      setWarnings([]);
      const uni = parseUniverse(universoTarget);
      if (uni <= 0) throw new Error("Informe um Universo válido (ex.: 7.309.944).");
      if (!canais.length) throw new Error("Adicione pelo menos um canal.");

      let totalCost = 0, totalGRP = 0, totalImp = 0;
      const warn: string[] = [];
      const items: CanalResult[] = [];

      canais.forEach((c) => {
        const name = c.nome || "Canal";
        const pen = Math.max(0, Math.min(100, parseNumTol(c.penetracao) || 100));
        let people = Math.max(0, Math.round(parseNumTol(c.alcance)));
        const impacts = Math.max(0, Math.round(parseNumTol(c.impactos)));
        const cost = Math.max(0, parseNumTol(c.custo));

        const potential = Math.max(0, uni * (pen / 100));
        if (people > potential) {
          warn.push(`"${name}": pessoas (${fmtInt(people)}) > potencial (${fmtInt(potential)}). Valor limitado.`);
          people = Math.round(potential);
        }

        const adjReach = uni > 0 ? Math.min(1, Math.max(0, people / uni)) : 0;
        const absReach = Math.round(adjReach * uni);
        const freq = absReach > 0 ? impacts / absReach : 0;
        const reachPct = adjReach * 100;

        if (adjReach > 0 && freq > 0) {
          totalCost += cost;
          totalGRP += adjReach * freq * 100;
          totalImp += impacts;
          const cpm = impacts > 0 ? (cost / impacts) * 1000 : 0;
          items.push({ name, adjReach, absReach, impacts, grp: adjReach * freq * 100, cost, cpm, reachPct, freq });
        }
      });

      if (!items.length) throw new Error("Preencha ao menos um canal válido.");

      // Sainsbury combined reach
      let totalReach = 0;
      if (items.length === 1) {
        totalReach = items[0].adjReach;
      } else {
        let nonReachProd = 1;
        for (const it of items) nonReachProd *= 1 - Math.max(0, Math.min(1, it.adjReach));
        totalReach = 1 - nonReachProd;
      }
      totalReach = Math.max(0, Math.min(1, totalReach));

      const uniqueReached = totalReach * uni;
      const avgFreq = totalReach > 0 ? totalGRP / (totalReach * 100) : 0;
      const cppa = totalReach > 0 ? totalCost / (totalReach * 100) : 0;
      const costPerPerson = uniqueReached > 0 ? totalCost / uniqueReached : 0;
      const totalCPM = totalImp > 0 ? (totalCost / totalImp) * 1000 : 0;

      setResultado({
        reach: totalReach, uniq: uniqueReached, freq: avgFreq, imp: totalImp,
        cost: totalCost, grp: totalGRP, cpm: totalCPM, cppa, cpp: costPerPerson,
        universe: uni, items,
      });
      setWarnings(warn);
    } catch (err: any) {
      setError(err.message || "Falha ao calcular.");
    }
  }, [canais, universoTarget]);

  // ── Sorted items ──
  const sortedItems = useMemo(() => {
    if (!resultado) return [];
    const [key, dir] = sortBy.split("-") as [string, string];
    return [...resultado.items].sort((a, b) => {
      if (key === "name") return dir === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      const mapKey: Record<string, keyof CanalResult> = {
        abs: "absReach", cov: "reachPct", freq: "freq", cpm: "cpm", cost: "cost",
      };
      const k = mapKey[key] || "absReach";
      return dir === "asc" ? (a[k] as number) - (b[k] as number) : (b[k] as number) - (a[k] as number);
    });
  }, [resultado, sortBy]);

  // ── Chart data ──
  const chartData = useMemo(() => {
    if (!resultado) return [];
    return [
      ...resultado.items.map((i) => ({ name: i.name, value: Math.min(100, i.adjReach * 100) })),
      { name: "Total", value: Math.min(100, resultado.reach * 100) },
    ];
  }, [resultado]);

  const cpmChartData = useMemo(() => {
    if (!resultado) return [];
    return [...resultado.items]
      .map((c) => ({ name: c.name, value: c.cpm }))
      .sort((a, b) => b.value - a.value);
  }, [resultado]);

  // ── Download CSV modelo ──
  const downloadModelo = () => {
    const a = document.createElement("a");
    a.href = "/Modelo_Sainsbury_Preenchido.csv";
    a.download = "Modelo_Sainsbury_Preenchido.csv";
    a.click();
  };

  // ── Download CSV resultados ──
  const downloadResultados = () => {
    if (!resultado) return;
    const sep = ";";
    const q = (v: string | number) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const fmtCsv = (n: number, d = 2) => (isNaN(n) ? "" : n.toFixed(d).replace(".", ","));
    const now = new Date();
    const stamp = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const meta = [
      [q("Plano"), q(nomePlano)].join(sep),
      [q("Target"), q(target)].join(sep),
      [q("Universo"), q(resultado.universe)].join(sep),
      [q("Gerado em"), q(stamp)].join(sep),
    ].join("\n");

    const header = ["Canal", "Pessoas (alcance abs.)", "Cobertura (%)", "Frequência", "Impactos", "Custo (R$)", "CPM (R$/mil)"].map(q).join(sep);

    const rows = resultado.items.map((c) =>
      [q(c.name), q(Math.round(c.absReach)), q(fmtCsv(c.reachPct)), q(fmtCsv(c.freq)), q(Math.round(c.impacts)), q(fmtCsv(c.cost)), q(fmtCsv(c.cpm, 4))].join(sep)
    );

    const totLine = [q("TOTAL"), q(Math.round(resultado.uniq)), q(fmtCsv(resultado.reach * 100)), q(fmtCsv(resultado.freq)), q(Math.round(resultado.imp)), q(fmtCsv(resultado.cost)), q(fmtCsv(resultado.cpm, 4))].join(sep);

    const csv = ["\ufeff", meta, "", header, ...rows, totLine].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const safe = (s: string) => String(s || "").replace(/[\\\/:*?"<>|]+/g, "").replace(/\s+/g, " ").trim();
    const uniSan = String(Math.round(parseUniverse(universoTarget)));
    const filename = `${safe(nomePlano)} - ${safe(target)} - ${uniSan}.csv`;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-extrabold text-foreground uppercase tracking-tight">
          Calculadora de Sainsbury
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Mode: <strong className="text-foreground">Pessoas + Impactos</strong>. Desenvolvido por Renato Poletto e Eduardo Akkari
        </p>
      </div>

      {/* CSV Upload */}
      <div className="glass-card mt-6 p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Carregar Plano via CSV</h2>
        <button
          className="text-sm text-foreground mb-2 flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
          onClick={() => setDiagOpen(!diagOpen)}
        >
          {diagOpen ? "▼" : "▶"} Diagnóstico do CSV (clique para abrir)
        </button>
        {diagOpen && (
          <div className="text-sm text-muted-foreground mb-3 whitespace-pre-wrap">
            {csvDiag}
            {"\n"}pronto (eventos ligados).
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          <input
            ref={fileRef}
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="text-sm file:mr-3 file:rounded-md file:border file:border-border file:bg-background file:px-3 file:py-1.5 file:text-sm file:text-foreground file:cursor-pointer text-muted-foreground"
          />
          <Button variant="secondary" onClick={downloadModelo}>
            <Download className="w-4 h-4 mr-1" />
            Baixar modelo CSV Preenchido
          </Button>
          <button onClick={limparCanais} className="text-sm text-primary font-medium hover:underline cursor-pointer">
            Limpar canais
          </button>
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-1" />
            RESET
          </Button>
        </div>
        <div className="mt-4 text-xs text-muted-foreground space-y-1">
          <p>Cabeçalhos aceitos (auto-detecção):</p>
          <p>· <strong className="text-foreground">Legacy</strong>: Canal, Alcance, Frequência, Custo, Penetração</p>
          <p>· <strong className="text-foreground">Pessoas/Impactos</strong>: Canal, Pessoas, Impactos, Custo, Penetração</p>
        </div>
      </div>

      {/* Dados Iniciais */}
      <div className="glass-card mt-6 p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Dados Iniciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Nome do Plano</Label>
            <Input placeholder="Ex: Lançamento Verão" value={nomePlano} onChange={(e) => setNomePlano(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Target</Label>
            <Input placeholder="Ex: A25-44 ABC" value={target} onChange={(e) => setTarget(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Universo do Target</Label>
            <Input placeholder="Ex: 7.309.944" value={universoTarget} onChange={(e) => setUniversoTarget(e.target.value)} />
          </div>
        </div>
      </div>

      {/* Configuração de Canais */}
      <div className="glass-card mt-6 p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Configuração de Canais</h2>
        <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-3 mb-2 px-1">
          <span className="text-xs text-muted-foreground font-medium">Canal</span>
          <span className="text-xs text-muted-foreground font-medium">Alcance (abs)</span>
          <span className="text-xs text-muted-foreground font-medium">Impactos</span>
          <span className="text-xs text-muted-foreground font-medium">Custo (R$)</span>
          <span className="text-xs text-muted-foreground font-medium">Penetração (TGI)</span>
          <span className="w-16" />
        </div>
        {canais.map((canal, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] gap-3 mb-3">
            <Input placeholder="Ex: TV Aberta" value={canal.nome} onChange={(e) => updateCanal(i, "nome", e.target.value)} />
            <Input placeholder="Alcance (abs)" value={canal.alcance} onChange={(e) => updateCanal(i, "alcance", e.target.value)} />
            <Input placeholder="Impactos" value={canal.impactos} onChange={(e) => updateCanal(i, "impactos", e.target.value)} />
            <Input placeholder="Custo (R$)" value={canal.custo} onChange={(e) => updateCanal(i, "custo", e.target.value)} />
            <Input placeholder="100" value={canal.penetracao} onChange={(e) => updateCanal(i, "penetracao", e.target.value)} />
            <button onClick={() => removeCanal(i)} className="text-destructive text-sm font-medium hover:underline cursor-pointer flex items-center justify-center md:w-16">
              Remover
            </button>
          </div>
        ))}
        <Button onClick={addCanal} className="mt-2">
          <Plus className="w-4 h-4 mr-1" />
          Adicionar Canal
        </Button>
        <p className="text-xs text-muted-foreground mt-4">
          Penetração (TGI) padrão = 100. No modo Pessoas/Impactos, Cobertura (%) e Freq. são calculadas.
        </p>
      </div>

      {/* Resultados */}
      <div className="glass-card mt-6 p-6">
        <h2 className="text-lg font-bold text-foreground mb-4">Resultados</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={handleCalc}>Calcular</Button>
          <Button variant="secondary" onClick={downloadResultados} disabled={!resultado}>
            <Download className="w-4 h-4 mr-1" />
            Baixar CSV dos Resultados
          </Button>
          <span className="text-xs text-muted-foreground">Exporta Dados Iniciais + Configuração de Canais + Resultados.</span>
        </div>

        {error && <p className="text-destructive text-sm mt-3">{error}</p>}
        {warnings.length > 0 && (
          <p className="text-yellow-500 text-sm mt-3">{warnings.join(" • ")}</p>
        )}

        {resultado && (
          <>
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <ResultCard label="Cobertura (%)" value={`${fmtNum(resultado.reach * 100)}%`} hint={`Aprox. ${fmtInt(resultado.uniq)} pessoas`} />
              <ResultCard label="Frequência Média" value={fmtNum(resultado.freq)} />
              <ResultCard label="Custo Total" value={fmtBRL(resultado.cost)} />
              <ResultCard label="CPpA (R$ / p.p.)" value={fmtBRL(resultado.cppa)} />
              <ResultCard label="Impactos Consolidados" value={fmtInt(resultado.imp)} />
              <ResultCard label="GRP Total" value={fmtNum(resultado.grp)} />
              <ResultCard label="Custo por pessoa" value={fmtBRL(resultado.cpp)} />
              <ResultCard label="R$ CPM" value={fmtBRL(resultado.cpm)} />
            </div>

            {/* Table */}
            <SectionTitle>Alcance absoluto por canal — tabela</SectionTitle>
            <div className="flex items-center gap-3 mb-3">
              <label className="text-xs text-muted-foreground">Ordenar por:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="bg-background border border-border rounded-md px-2 py-1 text-sm text-foreground"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">Canal</th>
                    <th className="text-right py-2 px-3 text-muted-foreground font-medium">Alcance absoluto (pessoas)</th>
                    <th className="text-right py-2 px-3 text-muted-foreground font-medium">Cobertura (%)</th>
                    <th className="text-right py-2 px-3 text-muted-foreground font-medium">Freq. média</th>
                    <th className="text-right py-2 px-3 text-muted-foreground font-medium">Custo (R$)</th>
                    <th className="text-right py-2 px-3 text-muted-foreground font-medium">CPM (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedItems.map((c, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-2 px-3 text-foreground font-medium">{c.name}</td>
                      <td className="py-2 px-3 text-right text-primary">{fmtInt(c.absReach)}</td>
                      <td className="py-2 px-3 text-right text-primary">{fmtNum(c.reachPct)}%</td>
                      <td className="py-2 px-3 text-right">{fmtNum(c.freq)}</td>
                      <td className="py-2 px-3 text-right">{fmtBRL(c.cost)}</td>
                      <td className="py-2 px-3 text-right">{fmtBRL(c.cpm)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              CPM (alcance) = Custo ÷ Pessoas × 1000. Cobertura por canal é limitada a 0–100% (e ao potencial pela Penetração).
            </p>

            {/* Alcance Chart */}
            <SectionTitle>Alcance por canal</SectionTitle>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 30, bottom: 60, left: 20 }}>
                  <XAxis dataKey="name" tick={{ fill: "#9ca3af", fontSize: 11 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} tickFormatter={(v) => `${v.toFixed(0)}%`} />
                  <Tooltip
                    formatter={(value: number) => [`${fmtNum(value)}%`, "Cobertura"]}
                    contentStyle={{ backgroundColor: "hsl(220, 18%, 13%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8 }}
                    labelStyle={{ color: "#e5e7eb" }}
                    itemStyle={{ color: "#e5e7eb" }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.name === "Total" ? CHART_COLORS[0] : CHART_COLORS[1]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* CPM Chart */}
            <SectionTitle>CPM por canal (R$)</SectionTitle>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={cpmChartData} layout="vertical" margin={{ left: 100, right: 30, top: 10, bottom: 10 }}>
                  <XAxis type="number" tick={{ fill: "#9ca3af", fontSize: 12 }} tickFormatter={(v) => fmtNum(v)} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "#e5e7eb", fontSize: 12 }} width={100} />
                  <Tooltip
                    formatter={(value: number) => [fmtBRL(value), "CPM"]}
                    contentStyle={{ backgroundColor: "hsl(220, 18%, 13%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8 }}
                    labelStyle={{ color: "#e5e7eb" }}
                    itemStyle={{ color: "#e5e7eb" }}
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24} fill={CHART_COLORS[1]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CalculadoraSainsbury;
