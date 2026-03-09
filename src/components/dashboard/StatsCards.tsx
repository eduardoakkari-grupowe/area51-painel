import { DollarSign, Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  { label: "Receita Mensal", value: "R$ 40.000", icon: DollarSign, change: "+12.5%", positive: true },
  { label: "Receita Anual", value: "R$ 215.000", icon: TrendingUp, change: "+8.2%", positive: true },
  { label: "Usuários Ativos", value: "1.284", icon: Users, change: "+3.1%", positive: true },
  { label: "Pendentes", value: "18", icon: Clock, change: "-2", positive: false },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="glass-card p-5 flex items-start justify-between group hover:border-primary/30 transition-colors">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
            <span className={`text-xs font-medium mt-2 inline-block ${stat.positive ? "text-success" : "text-primary"}`}>
              {stat.change}
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            <stat.icon className="h-5 w-5" />
          </div>
        </div>
      ))}
    </div>
  );
}
