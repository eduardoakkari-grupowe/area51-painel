import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Direto", value: 55, color: "hsl(200, 70%, 50%)" },
  { name: "Social", value: 30, color: "hsl(160, 60%, 45%)" },
  { name: "Referência", value: 15, color: "hsl(0, 72%, 51%)" },
];

export function RevenueSourcesChart() {
  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">Fontes de Receita</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "hsl(220, 18%, 13%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: "8px", color: "hsl(220, 10%, 92%)" }}
            formatter={(value: number) => [`${value}%`, ""]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-4 mt-2">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
            <span className="text-xs text-muted-foreground">{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
