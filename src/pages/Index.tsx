import { DashboardLayout } from "@/components/DashboardLayout";
import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";

const formatDateTime = () => {
  const now = new Date();
  const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const day = days[now.getDay()];
  const date = now.getDate().toString().padStart(2, "0");
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return {
    datePart: `${day}, ${date} de ${month} de ${year}`,
    timePart: `${hours}:${minutes}`,
  };
};

const Index = () => {
  const [dateTime, setDateTime] = useState(formatDateTime());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(formatDateTime()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-xl p-6" style={{ backgroundColor: "hsl(0, 50%, 12%)" }}>
          <h1 className="text-2xl font-bold text-primary-foreground">Bem-vindo ao Dashboard do GrupoWe</h1>
          <p className="text-sm text-primary-foreground/80 mt-1 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{dateTime.datePart}</span>
            <span className="mx-1">-</span>
            <Clock className="h-4 w-4" />
            <span>{dateTime.timePart}</span>
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
