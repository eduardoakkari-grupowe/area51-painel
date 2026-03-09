import { DashboardLayout } from "@/components/DashboardLayout";
import wtagLogo from "@/assets/clients/wtag.png";
import abicalcadosLogo from "@/assets/clients/abicalcados.png";
import assistcardLogo from "@/assets/clients/assistcard.png";
import barrashoppingsulLogo from "@/assets/clients/barrashoppingsul.png";
import betdomilhaoLogo from "@/assets/clients/betdomilhao.png";
import bradescoaldeiahLogo from "@/assets/clients/bradescoaldeiah.png";
import bydLogo from "@/assets/clients/byd.png";
import calvinkleinLogo from "@/assets/clients/calvinklein.png";
import golLogo from "@/assets/clients/gol.png";
import goldenlakeLogo from "@/assets/clients/goldenlake.png";
import gollogLogo from "@/assets/clients/gollog.png";
import hervalLogo from "@/assets/clients/herval.png";
import hospitalmaededeusLogo from "@/assets/clients/hospitalmaededeus.png";
import legacyschoolLogo from "@/assets/clients/legacyschool.png";
import lelloLogo from "@/assets/clients/lello.png";
import multiplanLogo from "@/assets/clients/multiplan.png";
import nurnbergmesseLogo from "@/assets/clients/nurnbergmesse.png";
import parkshoppingcanoasLogo from "@/assets/clients/parkshoppingcanoas.png";
import sicrediLogo from "@/assets/clients/sicredi.png";
import slcLogo from "@/assets/clients/slc.png";
import unileverLogo from "@/assets/clients/unilever.png";

const clients = [
  { name: "WT.AG", logo: wtagLogo, invert: true, downloadUrl: "" },
  { name: "Abicalçados", logo: abicalcadosLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]", downloadUrl: "" },
  { name: "Assist Card", logo: assistcardLogo, invert: true, maxH: "max-h-[130px]", maxW: "max-w-[324px]", downloadUrl: "" },
  { name: "BarraShopping Sul", logo: barrashoppingsulLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]", downloadUrl: "" },
  { name: "Bet do Milhão", logo: betdomilhaoLogo, invert: true, maxH: "max-h-[56px]", maxW: "max-w-[140px]", downloadUrl: "" },
  { name: "Bradesco Aldeiah", logo: bradescoaldeiahLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]", downloadUrl: "" },
  { name: "BYD", logo: bydLogo, invert: true, maxH: "max-h-[108px]", maxW: "max-w-[270px]", downloadUrl: "" },
  { name: "Calvin Klein", logo: calvinkleinLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]", downloadUrl: "" },
  { name: "GOL", logo: golLogo, invert: true, maxH: "max-h-[108px]", maxW: "max-w-[270px]", downloadUrl: "" },
  { name: "Golden Lake", logo: goldenlakeLogo, invert: true, maxH: "max-h-[108px]", maxW: "max-w-[270px]", downloadUrl: "" },
  { name: "Gollog", logo: gollogLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]", downloadUrl: "" },
  { name: "Herval", logo: hervalLogo, invert: true, maxH: "max-h-[130px]", maxW: "max-w-[324px]", downloadUrl: "" },
  { name: "Hospital Mãe de Deus", logo: hospitalmaededeusLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]", downloadUrl: "" },
  { name: "Legacy School", logo: legacyschoolLogo, invert: true, maxH: "max-h-[54px]", maxW: "max-w-[135px]", downloadUrl: "" },
  { name: "Lello", logo: lelloLogo, invert: true, maxH: "max-h-[130px]", maxW: "max-w-[324px]", downloadUrl: "" },
  { name: "Multiplan", logo: multiplanLogo, invert: true, maxH: "max-h-[131px]", maxW: "max-w-[327px]", downloadUrl: "" },
  { name: "NürnbergMesse", logo: nurnbergmesseLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]", downloadUrl: "" },
  { name: "ParkShopping Canoas", logo: parkshoppingcanoasLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]", downloadUrl: "" },
  { name: "Sicredi", logo: sicrediLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]", downloadUrl: "" },
  { name: "SLC Agrícola", logo: slcLogo, invert: true, maxH: "max-h-[124px]", maxW: "max-w-[311px]", downloadUrl: "" },
  { name: "Unilever", logo: unileverLogo, invert: true, maxH: "max-h-[59px]", maxW: "max-w-[149px]", downloadUrl: "" },
];

const LogotiposWtag = () => {
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
        <h1 className="text-2xl font-bold text-foreground">Logotipos WT.AG / Clientes</h1>
        <p className="text-sm text-muted-foreground mt-1">Clique no logo desejado para baixar</p>
      </div>

      <h2 className="text-lg font-semibold text-foreground mt-6">Agência</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
        {clients.filter(c => c.name === "WT.AG").map((client) => (
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
        {clients.filter(c => c.name !== "WT.AG").map((client) => (
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

export default LogotiposWtag;
