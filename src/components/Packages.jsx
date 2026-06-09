import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import BasicImg from '../assets/basic.webp';
import ClearImg from '../assets/clear.webp';
import EliteImg from '../assets/elite.webp';

const Packages = () => {
  const packagesData = [
    {
      badge: "SMARTFIX",
      // Glavna reč i tip rešenja odvojeni radi lakšeg stilizovanja i maksimalnog fokusiranja klijenta
      hookWord: "STEINSCHLAG",
      titleSuffix: "Lösung Basic",
      features: [
        "Smart Repair bei Steinschlag",
        "Schnelle Reparatur in unter 30 Minuten",
        "Smart Check (Gummi & Flüssigkeiten)",
        "0 € mit Teilkasko (179,49 € ohne Versicherung)"
      ],
      price: "0 €",
      priceSub: "mit Teilkasko",
      bgImage: BasicImg 
    },
    {
      badge: "SMARTFIX",
      hookWord: "AUSTAUSCH",
      titleSuffix: "Lösung Clear",
      features: [
        "Hochwertiger Scheibenaustausch",
        "Perfekte Kalibrierung der Kamera-Systeme",
        "Clean Plus (alle Scheiben + Innenraum)",
        "Empfohlen: HX AQUA + Bosch Wischer"
      ],
      price: "0 €",
      priceSub: "oder Selbstbeteiligung",
      bgImage: ClearImg 
    },
    {
      badge: "SMARTFIX",
      hookWord: "SEITEN- & HECKSCHEIBE",
      titleSuffix: "Lösung Elite 24h",
      subTitle: "24H EMERGENCY SERVICE",
      features: [
        "24h Notdienst (7 Tage die Woche erreichbar)",
        "Sofortiger Austausch vor Ort oder mobil",
        "Full Clean (alle Scheiben + Cockpit)",
        "Direkte Abrechnung mit der Versicherung"
      ],
      price: "0 €",
      priceSub: "oder Selbstbeteiligung",
      bgImage: EliteImg 
    }
  ];

  return (
    <section className="bg-[#0b0c10] text-white py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Naslov sekcije */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-black tracking-widest uppercase flex items-center justify-center space-x-3">
          <span className="w-8 h-[2px] bg-smart-red"></span>
          <span>Unsere <span className="text-smart-red">Pakete</span></span>
          <span className="w-8 h-[2px] bg-smart-red"></span>
        </h2>
      </div>

      {/* Grid sa 3 kartice */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {packagesData.map((pkg, index) => (
          <div 
            key={index}
            className="relative bg-[#12141c] border border-gray-800/80 rounded-2xl overflow-hidden min-h-[440px] flex flex-col justify-between p-6 md:p-8 hover:border-smart-red/30 transition-all duration-300 group"
          >
            {/* POZADINSKA SLIKA */}
            <div 
              className="absolute top-0 right-0 w-[65%] h-full bg-cover bg-[position:40%_center] opacity-35 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-0"
              style={{ 
                backgroundImage: `url(${pkg.bgImage})`,
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)'
              }}
            ></div>

            {/* SADRŽAJ KARTICE */}
            <div className="relative z-10">
              {/* Mali crveni brend tag */}
              <span className="inline-block bg-smart-red/10 border border-smart-red/30 text-smart-red text-[10px] font-black tracking-wider px-2 py-0.5 rounded mb-3">
                {pkg.badge}
              </span>

              {/* RESTRUKTURIRANI NASLOV KOJI ISTIČE HOOK REČ */}
              <h3 className="flex flex-col text-white mb-2 leading-tight">
                {/* Glavna udarna reč - Ogromna i uočljiva */}
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase break-words">
                  {pkg.hookWord}
                </span>
                {/* Pod-naslov rešenja - Manji i suptilniji kako ne bi odvlačio pažnju */}
                <span className="text-sm font-bold text-gray-400 mt-1">
                  {pkg.titleSuffix}
                </span>
              </h3>
              
              {/* Opcioni podnaslov za Elite */}
              {pkg.subTitle && (
                <p className="text-[10px] font-black tracking-widest text-smart-red uppercase mb-4">
                  {pkg.subTitle}
                </p>
              )}

              {/* Lista funkcionalnosti sa smanjenim tekstom (kako bi naslov dominirao) */}
              <ul className="space-y-2.5 mt-5">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-[11px] text-gray-400 font-medium max-w-[70%] leading-relaxed">
                    <FaCheck className="text-smart-red text-[9px] mt-0.5 shrink-0" />
                    {/* Prva stavka u listi je malo svetlija radi SEO strukture */}
                    <span className={idx === 0 ? "text-gray-200 font-semibold" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DONJI DEO (Cena i dugme) */}
            <div className="relative z-10 flex items-end justify-between mt-8 pt-4 border-t border-gray-800/40">
              <div>
                <div className="text-3xl font-black text-smart-red leading-none mb-1">
                  {pkg.price}
                </div>
                <div className="text-[11px] text-gray-400 font-semibold">
                  {pkg.priceSub}
                </div>
              </div>

              <button className="flex items-center space-x-2 bg-smart-red hover:bg-smart-red-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-lg shadow-smart-red/10 active:scale-95">
                <span>Mehr erfahren</span>
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;