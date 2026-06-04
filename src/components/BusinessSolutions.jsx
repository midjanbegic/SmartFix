import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { LuTruck, LuUsers, LuShieldCheck } from 'react-icons/lu';

import fleetImg from '../assets/fleet.webp';
import partnerImg from '../assets/partner.webp';
import insuranceImg from '../assets/insurance.webp';

const BusinessSolutions = () => {
  const cards = [
    { id: 'fleet', icon: <LuTruck />, title: "SmartFix Fleet", subtitle: "Für Fuhrparks & Unternehmen", image: fleetImg },
    { id: 'partner', icon: <LuUsers />, title: "SmartFix Partner", subtitle: "Für Werkstätten & Partner", image: partnerImg },
    { id: 'insurance', icon: <LuShieldCheck />, title: "SmartFix Insurance", subtitle: "Für Versicherungen", image: insuranceImg }
  ];

  return (
    // Uklonjen max-width radi pune širine
    <section className="bg-[#0b0c10] py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        
        {/* Naslovni blok - sada zauzima isti prostor kao i ostale kartice */}
        <div className="bg-[#12141c] border border-gray-800/80 rounded-2xl p-8 flex flex-col justify-center min-h-[260px]">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            <span className="text-white block">Lösungen für</span>
            <span className="text-smart-red block mt-1">Geschäftskunden</span>
          </h2>
        </div>

        {cards.map((card) => (
          <div 
            key={card.id}
            className="relative bg-[#12141c] border border-gray-800/80 rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-between p-8 hover:border-smart-red/30 transition-all duration-300 group"
          >
            {/* Povećana vidljivost slike */}
            <div 
              className="absolute top-0 right-0 w-[60%] h-full bg-cover bg-center opacity-50 transition-opacity duration-300 pointer-events-none z-0"
              style={{ 
                backgroundImage: `url(${card.image})`,
                // Gradijent sada blaži (15%) da bi slika bila jasnija
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 100%)'
              }}
            ></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-smart-red rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-smart-red/20">
                  {React.cloneElement(card.icon, { className: "text-white text-2xl" })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{card.title}</h3>
                <p className="text-sm text-gray-400 font-medium">{card.subtitle}</p>
              </div>

              <button className="flex items-center space-x-2 text-sm font-bold text-white hover:text-smart-red transition-colors mt-6">
                <span>Mehr erfahren</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSolutions;