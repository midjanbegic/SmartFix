import React from 'react';
import { FaCalendarAlt, FaCamera } from 'react-icons/fa';
import logo1 from '../assets/Logo-1.webp';
import logo2 from '../assets/Logo-2.webp';
import logo3 from '../assets/Logo-3.webp';
import logo4 from '../assets/Logo-4.webp';
import heroBgWide from '../assets/hero.webp'; 

// Dodajemo city i state kao props sa default vrednostima
const Hero = ({ city, state }) => {
  
  const infoCards = [
    {
      icon: <img src={logo4} alt="Vor-Ort Service" className="w-full h-full object-cover scale-[3.5] object-[center_40%] -ml-1.5" />,
      title: "VOR-ORT SERVICE",
      desc: "Wir kommen zu Ihnen nach Hause, zur Arbeit oder auf die Straße."
    },
    {
      icon: <img src={logo2} alt="Kostenlos Prüfen" className="w-full h-full object-cover scale-[3] object-[center_50%]" />,
      title: "KOSTENLOS PRÜFEN",
      desc: "Mit Teilkasko oft 0 € Kosten – wir übernehmen die komplette Abwicklung."
    },
    {
      icon: <img src={logo1} alt="Schnell & Effizient" className="w-full h-full object-cover scale-[3.3] object-[center_41%]" />,
      title: "SCHNELL & EFFIZIENT",
      desc: "Die meisten Reparaturen oder Austausche in weniger als 24h erledigt."
    },
    {
      icon: <img src={logo3} alt="Profis mit Erfahrung" className="w-full h-full object-cover scale-[3] object-[center_42%]" />,
      title: "PROFIS MIT ERFAHRUNG",
      desc: "Zertifizierte Techniker & hochwertige Materialien in OE-Qualität."
    }
  ];

  return (
    <section 
      className="relative w-full min-h-[850px] lg:h-[95vh] bg-cover bg-center bg-no-repeat flex flex-col justify-between pt-24 pb-12 px-4 md:px-16 overflow-hidden bg-[#0b0c10]"
      style={{ backgroundImage: `url(${heroBgWide})` }}
    >
      <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/70 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl text-white my-auto select-none">
        
        {/* OPTIMIZOVAN DINAMIČKI NASLOV ZA SEO */}
        <h1 className="text-4xl md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          {city ? (
            <>
              Autoglas-Reparatur &<br />
              <span className="text-smart-red font-black">Scheibenaustausch</span> in {city}.
            </>
          ) : (
            <>
              Autoglas-Reparatur &<br />
              <span className="text-smart-red font-black">Scheibenaustausch</span> vor Ort.
            </>
          )}
        </h1>

        {/* OPTIMIZOVAN PODNASLOV SA KLJUČNOM REČJU "STEINSCHLAG" */}
        <p className="text-gray-100 text-base md:text-lg font-medium max-w-xl mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {city 
            ? `Schnelle Hilfe bei Steinschlag. Professioneller Autoglas-Service direkt in ${city} und Umgebung.` 
            : "Schnelle Hilfe bei Steinschlag. Professionelle Reparatur oder Austausch Ihrer Autoscheibe direkt vor Ort."}
        </p>

        {/* OPTIMIZOVANE KVAČICE SA SPECIFIČNIM VRSTAMA STAKALA (Windschutz-, Seiten-, Heckscheiben) */}
        <div className="space-y-3 mb-10 text-sm font-semibold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
          <div className="flex items-center space-x-2">
            <span className="text-smart-red text-xl font-black">✓</span>
            <span>Steinschlag-Reparatur & Austausch von Windschutzscheiben</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-smart-red text-xl font-black">✓</span>
            <span>Zuverlässiger Service für Seitenscheiben & Heckscheiben</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-smart-red text-xl font-black">✓</span>
            <span>Mobiler Vor-Ort-Service (Mit Teilkasko oft 0 € Kosten)</span>
          </div>
        </div>

        {/* Dugmad (Ostaju ista, samo prilagođen tekst za grad) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center space-x-3 bg-smart-red hover:bg-smart-red-hover text-white px-6 py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-smart-red/40 active:scale-95">
            <FaCalendarAlt />
            <span>{city ? `Termin in ${city} buchen` : "Jetzt Termin buchen"}</span>
          </button>
          
          <button className="flex items-center justify-center space-x-3 bg-black/60 hover:bg-black/80 text-gray-200 px-6 py-3.5 rounded-xl font-bold text-sm transition border border-gray-700 backdrop-blur-md active:scale-95">
            <FaCamera />
            <span>Schaden melden</span>
          </button>
        </div>
      </div>

      {/* INFO KARTICE (Ostaju potpuno netaknute jer su već odlične) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 md:mt-0">
        {infoCards.map((card, index) => (
          <div key={index} className="bg-[#12141c]/95 border border-gray-800/80 rounded-xl p-5 flex items-center space-x-4 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-smart-red/50 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full border-2 border-smart-red/40 bg-[#0b0c10] flex items-center justify-center shrink-0 shadow-lg overflow-hidden">
              {card.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-[13px] font-black tracking-wider text-white mb-1.5 uppercase">{card.title}</h3>
              <p className="text-[11px] text-gray-400 font-medium leading-normal">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;