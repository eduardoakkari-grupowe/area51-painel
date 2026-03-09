import { DashboardLayout } from "@/components/DashboardLayout";
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

const clients = [
  { name: "GrupoWe", logo: grupoWeLogo, downloadUrl: "" },
  { name: "BYD", logo: bydLogo, maxH: "max-h-24", maxW: "max-w-[240px]", invert: true, downloadUrl: "" },
  { name: "Brasilux", logo: brasiluxLogo, downloadUrl: "" },
  { name: "Bridgestone", logo: bridgestoneLogo, invert: true, downloadUrl: "" },
  { name: "Cacau Show", logo: cacaushowLogo, invert: true, downloadUrl: "" },
  { name: "EMS", logo: emsLogo, maxH: "max-h-[72px]", maxW: "max-w-[180px]", downloadUrl: "" },
  { name: "Eudora", logo: eudoraLogo, downloadUrl: "" },
  { name: "Germed", logo: germedLogo, maxH: "max-h-[62px]", maxW: "max-w-[156px]", downloadUrl: "" },
  { name: "Grupo Petrópolis", logo: grupoPetropolisLogo, downloadUrl: "" },
  { name: "Haier", logo: haierLogo, invert: true, downloadUrl: "" },
  { name: "IBJR", logo: ibjrLogo, maxH: "max-h-[62px]", maxW: "max-w-[156px]", downloadUrl: "" },
  { name: "Jovi", logo: joviLogo, downloadUrl: "" },
  { name: "Keeta", logo: keetaLogo, downloadUrl: "" },
  { name: "Legrand", logo: legrandLogo, maxH: "max-h-[62px]", maxW: "max-w-[156px]", downloadUrl: "" },
  { name: "Novibet", logo: novibetLogo, maxH: "max-h-24", maxW: "max-w-[240px]", invert: true, downloadUrl: "" },
  { name: "O Boticário", logo: oboticarioLogo, maxH: "max-h-24", maxW: "max-w-[240px]", invert: true, downloadUrl: "" },
  { name: "QI Tech", logo: qitechLogo, downloadUrl: "" },
  { name: "São Judas", logo: saojudasLogo, downloadUrl: "" },
  { name: "SBT", logo: sbtLogo, downloadUrl: "" },
  { name: "Shopee", logo: shopeeLogo, downloadUrl: "" },
  { name: "Shopee Digital", logo: shopeeDigitalLogo, maxH: "max-h-[72px]", maxW: "max-w-[180px]", downloadUrl: "" },
  { name: "SumUp", logo: sumupLogo, invert: true, downloadUrl: "" },
  { name: "TAO", logo: taoLogo, invert: true, downloadUrl: "" },
  { name: "Tauá", logo: tauaLogo, downloadUrl: "" },
  { name: "Tomorrowland", logo: tomorrowlandLogo, maxH: "max-h-[54px]", maxW: "max-w-[135px]", invert: true, downloadUrl: "" },
  { name: "Torra", logo: torraLogo, downloadUrl: "" },
  { name: "Vitamine-se", logo: vitamineseLogo, invert: true, downloadUrl: "" },
];

const Logotipos = () => {
  const handleDownload = (client: typeof clients[0]) => {
    if (!client.downloadUrl) {
      return;
    }
    const a = document.createElement("a");
    a.href = client.downloadUrl;
    a.download = `${client.name}.png`;
    a.click();
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Logotipos We / Clientes</h1>
        <p className="text-sm text-muted-foreground mt-1">Clique no logo desejado para baixar</p>
      </div>

      <h2 className="text-lg font-semibold text-foreground mt-6">Grupo</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
        {clients.filter(c => c.name === "GrupoWe").map((client) => (
          <div
            key={client.name}
            className="group glass-card flex flex-col items-center justify-center px-4 py-4 gap-2 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => handleDownload(client)}
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

      <h2 className="text-lg font-semibold text-foreground mt-6">Clientes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
        {clients.filter(c => c.name !== "GrupoWe").map((client) => (
          <div
            key={client.name}
            className="group glass-card flex flex-col items-center justify-center px-4 py-4 gap-2 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => handleDownload(client)}
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
    </DashboardLayout>
  );
};

export default Logotipos;
