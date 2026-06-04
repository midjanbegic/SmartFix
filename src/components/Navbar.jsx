import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-800 sticky top-0 backdrop-blur-md z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <div className="text-2xl font-black tracking-wider text-white">
          SMART<span className="text-smart-red">FIX</span>
        </div>
        <div className="hidden sm:block text-[9px] uppercase tracking-widest text-gray-400 leading-tight border-l border-gray-600 pl-2">
          Mobile <br /> Autoglas Service
        </div>
      </div>

      {/* Navigacioni Linkovi - Desktop */}
      <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-300">
        <li className="text-smart-red border-b-2 border-smart-red pb-1 cursor-pointer">Startseite</li>
        <li className="hover:text-white cursor-pointer transition">Leistungen</li>
        <li className="hover:text-white cursor-pointer transition">Pakete</li>
        <li className="hover:text-white cursor-pointer transition">Schadenstufen</li>
        <li className="hover:text-white cursor-pointer transition">Shop</li>
        <li className="hover:text-white cursor-pointer transition">Lösungen für Geschäftskunden</li>
        <li className="hover:text-white cursor-pointer transition">Über uns</li>
        <li className="hover:text-white cursor-pointer transition">Kontakt</li>
      </ul>

      {/* CTA Telefon Dugme */}
      <a 
        href="tel:+4915755092629" 
        className="flex items-center space-x-2 bg-smart-red hover:bg-smart-red-hover text-white px-4 py-2 rounded-full font-bold text-sm transition shadow-lg shadow-smart-red/20"
      >
        <FaPhoneAlt className="text-xs" />
        <span>+49 157 55092629</span>
      </a>
    </nav>
  );
};

export default Navbar;