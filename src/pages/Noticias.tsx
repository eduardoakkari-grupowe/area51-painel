import { DashboardLayout } from "@/components/DashboardLayout";
import { useEffect } from "react";
import brasiluxLogo from "@/assets/clients/brasilux.png";
import bridgestoneLogo from "@/assets/clients/bridgestone.png";
import bydLogo from "@/assets/clients/byd.png";
import cacaushowLogo from "@/assets/clients/cacaushow.png";
import emsLogo from "@/assets/clients/ems.png";
import eudoraLogo from "@/assets/clients/eudora.png";
import germedLogo from "@/assets/clients/germed.png";
import grupoPetropolisLogo from "@/assets/clients/grupo-petropolis.png";
import haierLogo from "@/assets/clients/haier.png";
import ibjrLogo from "@/assets/clients/ibjr.png";
import joviLogo from "@/assets/clients/jovi.png";
import keetaLogo from "@/assets/clients/keeta.png";
import legrandLogo from "@/assets/clients/legrand.png";
import novibetLogo from "@/assets/clients/novibet.png";
import oboticarioLogo from "@/assets/clients/oboticario.png";
import qitechLogo from "@/assets/clients/qitech.png";
import saojudasLogo from "@/assets/clients/saojudas.png";
import sbtLogo from "@/assets/clients/sbt.png";
import shopeeDigitalLogo from "@/assets/clients/shopee-digital.png";
import shopeeLogo from "@/assets/clients/shopee.png";
import sumupLogo from "@/assets/clients/sumup.png";
import tauaLogo from "@/assets/clients/taua.png";
import tomorrowlandLogo from "@/assets/clients/tomorrowland.png";
import torraLogo from "@/assets/clients/torra.png";
import vitamineseLogo from "@/assets/clients/vitaminese.png";
import taoLogo from "@/assets/clients/tao.png";
import grupoWeLogo from "@/assets/clients/grupowe.webp";
import bydNewsLogo from "@/assets/clients/byd-news.png";

const clients = [
  { name: "GrupoWe", logo: grupoWeLogo },
  { name: "BYD", logo: bydLogo, maxH: "max-h-[115px]", maxW: "max-w-[288px]", invert: true },
  { name: "Brasilux", logo: brasiluxLogo },
  { name: "Bridgestone", logo: bridgestoneLogo, invert: true },
  { name: "Cacau Show", logo: cacaushowLogo, invert: true },
  { name: "EMS", logo: emsLogo, maxH: "max-h-[72px]", maxW: "max-w-[180px]" },
  { name: "Eudora", logo: eudoraLogo },
  { name: "Germed", logo: germedLogo, maxH: "max-h-[62px]", maxW: "max-w-[156px]" },
  { name: "Grupo Petrópolis", logo: grupoPetropolisLogo },
  { name: "Haier", logo: haierLogo, invert: true },
  { name: "IBJR", logo: ibjrLogo, maxH: "max-h-[62px]", maxW: "max-w-[156px]" },
  { name: "Jovi", logo: joviLogo },
  { name: "Keeta", logo: keetaLogo },
  { name: "Legrand", logo: legrandLogo, maxH: "max-h-[62px]", maxW: "max-w-[156px]" },
  { name: "Novibet", logo: novibetLogo, maxH: "max-h-[120px]", maxW: "max-w-[300px]", invert: true },
  { name: "O Boticário", logo: oboticarioLogo, maxH: "max-h-[120px]", maxW: "max-w-[300px]", invert: true },
  { name: "QI Tech", logo: qitechLogo },
  { name: "São Judas", logo: saojudasLogo },
  { name: "SBT", logo: sbtLogo },
  { name: "Shopee", logo: shopeeLogo },
  { name: "Shopee Digital", logo: shopeeDigitalLogo, maxH: "max-h-[72px]", maxW: "max-w-[180px]" },
  { name: "SumUp", logo: sumupLogo, invert: true },
  { name: "TAO", logo: taoLogo, invert: true },
  { name: "Tauá", logo: tauaLogo },
  { name: "Tomorrowland", logo: tomorrowlandLogo, maxH: "max-h-[54px]", maxW: "max-w-[135px]", invert: true },
  { name: "Torra", logo: torraLogo },
  { name: "Vitamine-se", logo: vitamineseLogo, invert: true },
];

const Noticias = () => {
  useEffect(() => {
    // Load rssapp script
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
        <h1 className="text-2xl font-bold text-foreground">Notícias We / Clientes</h1>
        <p className="text-sm text-muted-foreground mt-1">Verifique as notícias de nossos clientes</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {clients.map((client) => (
          <div
            key={client.name}
            className="group glass-card flex flex-col items-center justify-center px-4 py-4 gap-2 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => {
              if (client.name === "BYD") {
                document.getElementById("news-byd")?.scrollIntoView({ behavior: "smooth" });
              } else if (client.name === "GrupoWe") {
                document.getElementById("news-grupowe")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div className="h-12 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className={`${client.maxH || "max-h-12"} ${client.maxW || "max-w-[120px]"} object-contain transition-transform duration-300 group-hover:scale-110`}
                style={client.invert ? { filter: "brightness(0) invert(1)" } : undefined}
              />
            </div>
            <span className="text-xs text-muted-foreground text-center">{client.name}</span>
          </div>
        ))}
      </div>

      {/* GrupoWe News Section */}
      <div id="news-grupowe" className="glass-card mt-6 p-6">
        <div className="flex items-center gap-4 mb-2">
          <img
            src={grupoWeLogo}
            alt="GrupoWe"
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

      {/* BYD News Section */}
      <div id="news-byd" className="glass-card mt-6 p-6">
        <div className="flex items-center gap-4 mb-2">
          <img
            src={bydNewsLogo}
            alt="BYD"
            className="max-h-24 max-w-[240px] object-contain py-2"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="border-t border-border pt-4">
          <div
            dangerouslySetInnerHTML={{
              __html: '<rssapp-magazine id="_KIl2gKqjRQXVz9B8"></rssapp-magazine>',
            }}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Noticias;
