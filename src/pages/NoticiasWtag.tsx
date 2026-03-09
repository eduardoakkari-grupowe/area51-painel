import { DashboardLayout } from "@/components/DashboardLayout";
import { useEffect } from "react";
import bydLogo from "@/assets/clients/byd.png";
import bydNewsLogo from "@/assets/clients/byd-news.png";
import wtagLogo from "@/assets/clients/wtag.png";
import multiplanLogo from "@/assets/clients/multiplan.png";
import golLogo from "@/assets/clients/gol.png";
import gollogLogo from "@/assets/clients/gollog.png";
import unileverLogo from "@/assets/clients/unilever.png";
import sicrediLogo from "@/assets/clients/sicredi.png";
import calvinkleinLogo from "@/assets/clients/calvinklein.png";
import slcLogo from "@/assets/clients/slc.png";
import legacyschoolLogo from "@/assets/clients/legacyschool.png";
import assistcardLogo from "@/assets/clients/assistcard.png";
import hervalLogo from "@/assets/clients/herval.png";
import betdomilhaoLogo from "@/assets/clients/betdomilhao.png";
import lelloLogo from "@/assets/clients/lello.png";
import barrashoppingsulLogo from "@/assets/clients/barrashoppingsul.png";
import parkshoppingcanoasLogo from "@/assets/clients/parkshoppingcanoas.png";
import goldenlakeLogo from "@/assets/clients/goldenlake.png";
import abicalcadosLogo from "@/assets/clients/abicalcados.png";
import bradescoaldeiahLogo from "@/assets/clients/bradescoaldeiah.png";
import hospitalmaededeusLogo from "@/assets/clients/hospitalmaededeus.png";
import nurnbergmesseLogo from "@/assets/clients/nurnbergmesse.png";

const clients = [
  { name: "WT.AG", logo: wtagLogo, invert: true, maxH: "max-h-[52px]", maxW: "max-w-[130px]" },
  { name: "Abicalçados", logo: abicalcadosLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]" },
  { name: "Assist Card", logo: assistcardLogo, invert: true, maxH: "max-h-[130px]", maxW: "max-w-[324px]" },
  { name: "BarraShopping Sul", logo: barrashoppingsulLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]" },
  { name: "Bet do Milhão", logo: betdomilhaoLogo, invert: true, maxH: "max-h-[56px]", maxW: "max-w-[140px]" },
  { name: "Bradesco Aldeiah", logo: bradescoaldeiahLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]" },
  { name: "BYD", logo: bydLogo, invert: true, maxH: "max-h-[108px]", maxW: "max-w-[270px]" },
  { name: "Calvin Klein", logo: calvinkleinLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]" },
  { name: "GOL", logo: golLogo, invert: true, maxH: "max-h-[108px]", maxW: "max-w-[270px]" },
  { name: "Golden Lake", logo: goldenlakeLogo, invert: true, maxH: "max-h-[108px]", maxW: "max-w-[270px]" },
  { name: "Gollog", logo: gollogLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]" },
  { name: "Herval", logo: hervalLogo, invert: true, maxH: "max-h-[130px]", maxW: "max-w-[324px]" },
  { name: "Hospital Mãe de Deus", logo: hospitalmaededeusLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]" },
  { name: "Legacy School", logo: legacyschoolLogo, invert: true, maxH: "max-h-[54px]", maxW: "max-w-[135px]" },
  { name: "Lello", logo: lelloLogo, invert: true, maxH: "max-h-[130px]", maxW: "max-w-[324px]" },
  { name: "Multiplan", logo: multiplanLogo, invert: true, maxH: "max-h-[131px]", maxW: "max-w-[327px]" },
  { name: "NürnbergMesse", logo: nurnbergmesseLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]" },
  { name: "ParkShopping Canoas", logo: parkshoppingcanoasLogo, invert: true, maxH: "max-h-[143px]", maxW: "max-w-[356px]" },
  { name: "Sicredi", logo: sicrediLogo, invert: true, maxH: "max-h-[119px]", maxW: "max-w-[297px]" },
  { name: "SLC Agrícola", logo: slcLogo, invert: true, maxH: "max-h-[124px]", maxW: "max-w-[311px]" },
  { name: "Unilever", logo: unileverLogo, invert: true, maxH: "max-h-[59px]", maxW: "max-w-[149px]" },
];

const NoticiasWtag = () => {
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
        <h1 className="text-2xl font-bold text-foreground">Notícias WT.AG / Clientes</h1>
        <p className="text-sm text-muted-foreground mt-1">Verifique as notícias de nossos clientes</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {clients.map((client) => (
          <div
            key={client.name}
            className="group glass-card flex flex-col items-center justify-center px-4 py-4 gap-2 hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => {
              if (client.name === "BYD") {
                document.getElementById("news-wtag-byd")?.scrollIntoView({ behavior: "smooth" });
              } else if (client.name === "WT.AG") {
                document.getElementById("news-wtag-grupowe")?.scrollIntoView({ behavior: "smooth" });
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
      <div id="news-wtag-grupowe" className="glass-card mt-6 p-6">
        <div className="flex items-center gap-4 mb-2">
          <img
            src={wtagLogo}
            alt="WT.AG"
            className="max-h-24 max-w-[240px] object-contain py-2"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <div className="border-t border-border pt-4">
          <div
            dangerouslySetInnerHTML={{
              __html: '<rssapp-magazine id="tWMwgtSn4Z2fs4h5"></rssapp-magazine>',
            }}
          />
        </div>
      </div>

      {/* BYD News Section */}
      <div id="news-wtag-byd" className="glass-card mt-6 p-6">
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

export default NoticiasWtag;
