import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", value: 4000 },
  { month: "Fev", value: 3000 },
  { month: "Mar", value: 8000 },
  { month: "Abr", value: 7000 },
  { month: "Mai", value: 12000 },
  { month: "Jun", value: 15000 },
  { month: "Jul", value: 18000 },
  { month: "Ago", value: 22000 },
  { month: "Set", value: 25000 },
  { month: "Out", value: 30000 },
  { month: "Nov", value: 35000 },
  { month: "Dez", value: 40000 },
];

export function EarningsChart() {
  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">Visão Geral de Receita</h3>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(220, 10%, 55%)" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 55%)" }} axisLine={false} tickLine={false} tickFormatter={(v) => `R$${v / 1000}k`} />
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(220, 18%, 13%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: "8px", color: "hsl(220, 10%, 92%)" }}
            formatter={(value: number) => [`R$ ${value.toLocaleString()}`, "Receita"]}
          />
          <Area type="monotone" dataKey="value" stroke="hsl(0, 72%, 51%)" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
