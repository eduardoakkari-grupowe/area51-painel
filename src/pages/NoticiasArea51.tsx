import { DashboardLayout } from "@/components/DashboardLayout";
import { useEffect } from "react";
import area51Logo from "@/assets/clients/area51.png";
import bauduccoLogo from "@/assets/clients/bauducco.png";
import elawLogo from "@/assets/clients/elaw.png";
import euro17Logo from "@/assets/clients/euro17.png";
import novvoLogo from "@/assets/clients/novvo.png";

const clients = [
  { name: "area51", logo: area51Logo, maxH: "max-h-[53px]", maxW: "max-w-[132px]" },
  { name: "Bauducco", logo: bauduccoLogo, invert: true, maxH: "max-h-[55px]", maxW: "max-w-[138px]" },
  { name: "eLaw", logo: elawLogo, invert: true, maxH: "max-h-[53px]", maxW: "max-w-[132px]" },
  { name: "Euro17", logo: euro17Logo, invert: true },
  { name: "Novvo", logo: novvoLogo, invert: true },
];

const NoticiasArea51 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.rss.app/v1/magazine.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Notícias area51 / Clientes</h1>
        <p className="text-sm text-muted-foreground mt-1">Verifique as notícias de nossos clientes</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {clients.map((client) => (
          <div
            key={client.name}
            className="group glass-card flex flex-col items-center justify-center px-4 py-4 gap-2 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => {
              if (client.name === "area51") {
                document.getElementById("news-area51-grupowe")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div className="h-12 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className={`${'maxH' in client ? client.maxH : "max-h-12"} ${'maxW' in client ? client.maxW : "max-w-[120px]"} object-contain transition-transform duration-300 group-hover:scale-110`}
                style={client.invert ? { filter: "brightness(0) invert(1)" } : undefined}
              />
            </div>
            <span className="text-xs text-muted-foreground text-center">{client.name}</span>
          </div>
        ))}
      </div>

      {/* GrupoWe News Section */}
      <div id="news-area51-grupowe" className="glass-card mt-6 p-6">
        <div className="flex items-center gap-4 mb-2">
          <img
            src={area51Logo}
            alt="area51"
            className="max-h-24 max-w-[240px] object-contain py-2"
          />
        </div>
        <div className="border-t border-border pt-4">
          <div
            dangerouslySetInnerHTML={{
              __html: '<rssapp-magazine id="_OTSBSo0uXhDyT6tI"></rssapp-magazine>',
            }}
          />
        </div>
      </div>

    </DashboardLayout>
  );
};

export default NoticiasArea51;
