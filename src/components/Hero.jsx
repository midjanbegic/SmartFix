import React from 'react';
import { FaCalendarAlt, FaCamera } from 'react-icons/fa';
import logo1 from '../assets/Logo-1.webp';
import logo2 from '../assets/Logo-2.webp';
import logo3 from '../assets/Logo-3.webp';
import logo4 from '../assets/Logo-4.webp';
import heroBg from '../assets/hero-bg.jpg'; 

const Hero = () => {
  // Ikone sada preuzimaju punu veličinu kontejnera, a scale-110 uklanja spoljne ivice generisane slike
  const infoCards = [
    {
      icon: <img 
  src={logo4} 
  alt="Vor-Ort Service" 
  className="w-full h-full object-cover scale-[3.5] object-[center_40%] -ml-1.5"
/>,
      title: "VOR-ORT SERVICE",
      desc: "Wir kommen zu Ihnen nach Hause, Arbeit oder Straße."
    },
    {
      icon: <img src={logo2} alt="Kostenlos Prüfen" className="w-full h-full object-cover scale-[3] object-[center_50%]"  />,
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
      desc: "Zertifikierte Techniker & hochwertige Materialien in OE-Qualität."
    }
  ];

  return (
    <section 
      className="relative w-full min-h-[850px] lg:h-[95vh] bg-cover bg-center bg-no-repeat flex flex-col justify-between pt-16 pb-12 px-6 md:px-16"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Tamni overlay za čitljivost teksta */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-0"></div>

      {/* GLAVNI SADRŽAJ (Tekst i dugmad) */}
      <div className="relative z-10 max-w-3xl text-white my-auto">
        {/* Glavni Naslov - POPRAVLJENA GRAMATIKA (Ihre klare Sicht) */}
        <h1 className="text-4xl md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6">
          Wir kommen zu Ihnen.<br />
          Ihre <span className="text-smart-red font-black">klare</span> Sicht.
        </h1>

        {/* Podnaslov */}
        <p className="text-gray-300 text-base md:text-lg font-medium max-w-xl mb-8 leading-relaxed">
          Professionelle Reparatur oder Austausch Ihrer<br className="hidden md:inline" /> 
          Autoscheibe – schnell, sauber und direkt vor Ort.
        </p>

        {/* Kvačice */}
        <div className="space-y-3 mb-10 text-sm font-semibold tracking-wide text-gray-200">
          <div className="flex items-center space-x-2">
            <span className="text-smart-red text-lg">✓</span>
            <span>Schnell & zuverlässig</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-smart-red text-lg">✓</span>
            <span>Deutschlandweiter Vor-Ort-Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-smart-red text-lg">✓</span>
            <span>Mit Ihrer Teilkasko – oft 0 € Kosten</span>
          </div>
        </div>

        {/* Dugmad */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center space-x-3 bg-smart-red hover:bg-smart-red-hover text-white px-6 py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-smart-red/30">
            <FaCalendarAlt />
            <span>Jetzt Termin buchen</span>
          </button>
          
          <button className="flex items-center justify-center space-x-3 bg-black/40 hover:bg-black/70 text-gray-200 px-6 py-3.5 rounded-xl font-bold text-sm transition border border-gray-700 backdrop-blur-sm">
            <FaCamera />
            <span>Schaden melden</span>
          </button>
        </div>
      </div>

      {/* INFO KARTICE NA DNU */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 md:mt-0">
        {infoCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-[#12141c]/95 border border-gray-800/60 rounded-xl p-5 flex items-center space-x-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-smart-red/40"
          >
            {/* Kontejner za ikonu: Povećan na w-16 h-16, overflow-hidden siječe tekst koji je bio ispod ikone na slici */}
            <div className="w-16 h-16 rounded-full border-2 border-smart-red/40 bg-[#0b0c10] flex items-center justify-center shrink-0 shadow-lg overflow-hidden">
              {card.icon}
            </div>
            
            {/* Tekstualni sadržaj */}
            <div className="flex-1">
              <h3 className="text-[13px] font-black tracking-wider text-white mb-1.5 uppercase">
                {card.title}
              </h3>
              <p className="text-[11px] text-gray-400 font-medium leading-normal">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;