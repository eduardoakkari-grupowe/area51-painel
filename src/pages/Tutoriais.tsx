import { DashboardLayout } from "@/components/DashboardLayout";

const Tutoriais = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Tutoriais</h1>
        <p className="text-sm text-muted-foreground mt-1">Acesse tutoriais e materiais de aprendizado</p>
      </div>

      <div className="mt-6 space-y-6">
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Tutorial de utilização do cubo de Pessoas Físicas</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hyQnZqVrkKc"
              title="Tutorial de utilização do cubo de Pessoas Físicas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tutoriais;
