import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Startseite', target: 'startseite' },
  { label: 'Pakete', target: 'pakete' },
  { label: 'Shop', target: 'shop' },
  { label: 'Geschäftskunden', target: 'geschaeftskunden' },
  { label: 'Über uns', target: 'ueber-uns' },
  { label: 'Kontakt', target: 'kontakt' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (target) => {
    const runScroll = () => {
      const section = document.getElementById(target);
      if (!section) return;

      const navOffset = 86;
      const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(runScroll, 120);
      return;
    }

    runScroll();
  };

  return (
    <nav className="bg-transparent text-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-800 sticky top-0 backdrop-blur-md z-50">
      {/* Logo */}
      <button
        type="button"
        onClick={() => scrollToSection('startseite')}
        className="flex items-center space-x-2 cursor-pointer text-left"
      >
        <div className="text-2xl font-black tracking-wider text-white">
          SMART<span className="text-smart-red">FIX</span>
        </div>
        <div className="hidden sm:block text-[9px] uppercase tracking-widest text-gray-400 leading-tight border-l border-gray-600 pl-2">
          Mobile <br /> Autoglas Service
        </div>
      </button>

      {/* Navigacioni Linkovi - Desktop */}
      <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-300">
        {navItems.map((item) => (
          <li key={item.target}>
            <button
              type="button"
              onClick={() => scrollToSection(item.target)}
              className="hover:text-white cursor-pointer transition"
            >
              {item.label}
            </button>
          </li>
        ))}
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
