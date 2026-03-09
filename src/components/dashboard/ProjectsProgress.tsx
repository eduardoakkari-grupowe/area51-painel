const projects = [
  { name: "Migração de Servidor", progress: 20, color: "bg-primary" },
  { name: "Rastreamento de Vendas", progress: 40, color: "bg-warning" },
  { name: "Base de Clientes", progress: 60, color: "bg-info" },
  { name: "Relatórios Financeiros", progress: 80, color: "bg-success" },
];

export function ProjectsProgress() {
  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">Projetos</h3>
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm text-foreground">{p.name}</span>
              <span className="text-xs text-muted-foreground">{p.progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div className={`h-full rounded-full ${p.color} transition-all duration-500`} style={{ width: `${p.progress}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
