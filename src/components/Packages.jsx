import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import BasicImg from '../assets/basic.webp';
import ClearImg from '../assets/clear.webp';
import EliteImg from '../assets/elite.webp';

const Packages = () => {
  const packagesData = [
    {
      badge: "SMARTFIX",
      title: "BASIC",
      features: [
        "Smart Repair (Steinschlag)",
        "Smart Clean (Glasreinigung)",
        "Smart Check (Gummi & Flüssigkeiten)",
        "0 € mit Teilkasko (179,49 € ohne Versicherung)"
      ],
      price: "0 €",
      priceSub: "mit Teilkasko",
      bgImage: BasicImg 
    },
    {
      badge: "SMARTFIX",
      title: "CLEAR",
      features: [
        "Hochwertiger Scheibenaustausch",
        "Clean Plus (alle Scheiben + Innenraum)",
        "Premium Check (Wischer, Flüssigkeit, Reifen)",
        "Empfohlen: HX AQUA + Bosch Wischer"
      ],
      price: "0 €",
      priceSub: "oder Selbstbeteiligung",
      bgImage: ClearImg 
    },
    {
      badge: "SMARTFIX",
      title: "ELITE",
      subTitle: "24H SERVICE",
      features: [
        "24h Emergency Service (7 Tage/Woche)",
        "Full Clean (alle Scheiben + Cockpit)",
        "Elite Check (kompletter Fahrzeug-Check)",
        "Empfohlen: Deluxe Elite Upgrade"
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
            className="relative bg-[#12141c] border border-gray-800/80 rounded-2xl overflow-hidden min-h-[420px] flex flex-col justify-between p-6 md:p-8 hover:border-smart-red/30 transition-all duration-300 group"
          >
            {/* POZADINSKA SLIKA ZA DESNU STRANU KARTICE - PROŠIRENA NA 65% */}
            <div 
              className="absolute top-0 right-0 w-[65%] h-full bg-cover bg-[position:40%_center] opacity-35 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-0"
              style={{ 
                backgroundImage: `url(${pkg.bgImage})`,
                // Gradijent je prilagođen tako da slika prelazi u crno tek na samom lijevom rubu svog kontejnera
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)'
              }}
            ></div>

            {/* SADRŽAJ KARTICE (Iznad slike) */}
            <div className="relative z-10">
              {/* Mali crveni brend tag */}
              <span className="inline-block bg-smart-red/10 border border-smart-red/30 text-smart-red text-[10px] font-black tracking-wider px-2 py-0.5 rounded mb-3">
                {pkg.badge}
              </span>

              {/* Naslov paketa */}
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-1">
                {pkg.title}
              </h3>
              
              {/* Opcioni podnaslov (za Elite paket) */}
              {pkg.subTitle && (
                <p className="text-[11px] font-black tracking-widest text-gray-400 uppercase mb-4">
                  {pkg.subTitle}
                </p>
              )}

              {/* Lista funkcionalnosti */}
              <ul className="space-y-2.5 mt-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300 font-medium max-w-[75%]">
                    <FaCheck className="text-smart-red text-[10px] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DONJI DEO (Cena i dugme) */}
            <div className="relative z-10 flex items-end justify-between mt-8 pt-4 border-t border-gray-800/40">
              {/* Cena */}
              <div>
                <div className="text-3xl font-black text-smart-red leading-none mb-1">
                  {pkg.price}
                </div>
                <div className="text-[11px] text-gray-400 font-semibold">
                  {pkg.priceSub}
                </div>
              </div>

              {/* Dugme "Mehr erfahren" */}
              <button className="flex items-center space-x-2 bg-smart-red hover:bg-smart-red-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-lg shadow-smart-red/10">
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