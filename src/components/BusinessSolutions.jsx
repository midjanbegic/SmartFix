import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { LuTruck, LuUsers, LuShieldCheck } from 'react-icons/lu';

import fleetImg from '../assets/fleet.webp';
import partnerImg from '../assets/partner.webp';
import insuranceImg from '../assets/insurance.webp';

const BusinessSolutions = () => {
  const cards = [
    { id: 'fleet', icon: <LuTruck />, title: "SmartFix Fleet", subtitle: "FUHRPARK-MANAGEMENT", desc: "Professionelle Lösungen für Flotten.", image: fleetImg },
    { id: 'partner', icon: <LuUsers />, title: "SmartFix Partner", subtitle: "NETZWERK & WERKSTÄTTEN", desc: "Exklusive Zusammenarbeit für Profis.", image: partnerImg },
    { id: 'insurance', icon: <LuShieldCheck />, title: "SmartFix Insurance", subtitle: "VERSICHERUNGSSERVICE", desc: "Direkte Abwicklung für Versicherer.", image: insuranceImg }
  ];

  return (
    <section id="geschaeftskunden" className="bg-[#0b0c10] pt-[10px] pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Naslovni deo */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">
            Maßgeschneiderte <span className="text-smart-red text-7xl block mt-3">BusinessSolutions</span>
          </h2>
          <p className="text-gray-400 text-lg">Ihr verlässlicher B2B Partner für professionelles Autoglas-Management.</p>
        </div>

        {/* Kartice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="relative bg-[#12141c] border border-gray-800 rounded-2xl overflow-hidden h-[380px] flex flex-col justify-end">
              
              {/* Slika kao pozadina - cela, bez isecanja */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0" 
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              
              {/* Gradijent preko slike da se tekst vidi */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-[#12141c]/60 to-transparent z-10"></div>

              {/* Ikona gore levo - fiksirana */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-smart-red rounded-xl flex items-center justify-center z-20 shadow-lg">
                {React.cloneElement(card.icon, { className: "text-white text-3xl" })}
              </div>

              {/* Sadržaj dole levo */}
              <div className="relative p-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
                <p className="text-smart-red text-[11px] font-black uppercase tracking-widest mb-4">{card.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{card.desc}</p>

                <button className="flex items-center space-x-2 text-sm font-bold text-white hover:text-smart-red transition-colors">
                  <span>Mehr erfahren</span>
                  <FaArrowRight className="text-[10px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
