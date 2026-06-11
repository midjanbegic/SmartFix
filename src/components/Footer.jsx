import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { LuMapPin, LuPhone, LuMail, LuClock } from 'react-icons/lu';
import GermanyMap from '../assets/map.webp'; // Provjeri putanju
import Logo from '../assets/logo.png'; // Ako imaš logo

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-[#050505] text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap lg:flex-nowrap justify-between items-start gap-12">
        
        {/* 1. LOGO & INFO */}
        <div className="w-full lg:w-1/4">
          <div className="text-white font-black text-xl mb-3 flex items-center gap-2">
            SMARTFIX <span className="text-[10px] uppercase font-normal tracking-widest text-gray-500">Mobile Autoglas</span>
          </div>
          <p className="text-[11px] leading-relaxed mb-4">
            Ihr Partner für Reparatur und Austausch<br />von Autoscheiben – direkt bei Ihnen.
          </p>
          <div className="flex space-x-2">
            {[FaWhatsapp, FaInstagram, FaFacebookF].map((Icon, i) => (
              <div key={i} className="w-8 h-8 border border-gray-800 rounded-full flex items-center justify-center hover:border-smart-red hover:text-smart-red transition">
                <Icon size={12} />
              </div>
            ))}
          </div>
        </div>

        {/* 2. LINKOVI, RJEŠENJA, SERVIS */}
        <div className="flex gap-16 text-[12px]">
          <div>
            <h4 className="text-white font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-gray-500">
              {['Startseite', 'Leistungen', 'Pakete', 'Schadensstufen', 'Shop'].map(item => <li key={item} className="hover:text-white cursor-pointer">{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Lösungen</h4>
            <ul className="space-y-2 text-gray-500">
              {['SmartFix Fleet', 'SmartFix Partner', 'SmartFix Insurance'].map(item => <li key={item} className="hover:text-white cursor-pointer">{item}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Service</h4>
            <ul className="space-y-2 text-gray-500">
              {['Über uns', 'Kontakt', 'FAQ', 'Impressum', 'Datenschutz'].map(item => <li key={item} className="hover:text-white cursor-pointer">{item}</li>)}
            </ul>
          </div>
        </div>

        {/* 3. KONTAKT & MAPA */}
        <div className="flex items-center gap-6">
          <div className="text-[12px] space-y-2 text-right">
            <div className="flex items-center justify-end gap-2"><span className="text-smart-red"><LuMapPin size={14}/></span> Deutschlandweiter Vor-Ort-Service</div>
            <div className="flex items-center justify-end gap-2"><span className="text-smart-red"><LuPhone size={14}/></span> +49 157 55092629</div>
            <div className="flex items-center justify-end gap-2"><span className="text-smart-red"><LuMail size={14}/></span> info@smartfix-autoglas.de</div>
            <div className="flex items-center justify-end gap-2"><span className="text-smart-red"><LuClock size={14}/></span> Mo - Sa: 08:00 - 18:00 Uhr</div>
          </div>
          <img src={GermanyMap} alt="Map" className="h-28 object-contain" />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1400px] mx-auto px-6 mt-8 text-[10px] text-gray-600 border-t border-gray-900 pt-4 text-center">
        &copy; 2026 SmartFix Mobile Autoglas. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
