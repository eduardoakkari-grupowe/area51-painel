import { Newspaper, Users, Wrench } from "lucide-react";

const activities = [
  { icon: Newspaper, text: "Nova notícia publicada", time: "Há 5 min", color: "text-info" },
  { icon: Users, text: "Novo usuário registrado", time: "Há 12 min", color: "text-success" },
  { icon: Wrench, text: "Ferramenta atualizada", time: "Há 30 min", color: "text-warning" },
  { icon: Newspaper, text: "Notícia editada", time: "Há 1h", color: "text-primary" },
  { icon: Users, text: "3 usuários desativados", time: "Há 2h", color: "text-primary" },
];

export function RecentActivity() {
  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">Atividade Recente</h3>
      <div className="space-y-3">
        {activities.map((a, i) => (
          <div key={i} className="flex items-center gap-3 py-2 border-b border-border/30 last:border-0">
            <div className={`p-2 rounded-lg bg-muted ${a.color}`}>
              <a.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{a.text}</p>
              <p className="text-xs text-muted-foreground">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
