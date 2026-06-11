import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import BasicImg from '../assets/package-basic-hero.png';
import ClearImg from '../assets/package-clear-hero.png';
import EliteImg from '../assets/package-elite-hero.png';

const Packages = () => {
  const packagesData = [
    {
      slug: 'basic',
      badge: 'SMARTFIX',
      hookWord: 'STEINSCHLAG',
      titleSuffix: 'Loesung Basic',
      features: [
        'Smart Repair bei Steinschlag',
        'Schnelle Reparatur in unter 30 Minuten',
        'Smart Check (Gummi & Fluessigkeiten)',
        '0 EUR mit Teilkasko (179,49 EUR ohne Versicherung)'
      ],
      price: '0 EUR',
      priceSub: 'mit Teilkasko',
      bgImage: BasicImg,
      imagePosition: '62% center'
    },
    {
      slug: 'clear',
      badge: 'SMARTFIX',
      hookWord: 'AUSTAUSCH',
      titleSuffix: 'Loesung Clear',
      features: [
        'Hochwertiger Scheibenaustausch',
        'Perfekte Kalibrierung der Kamera-Systeme',
        'Service Check (alle Scheiben + Innenraum)',
        'Empfohlen: Safe Drive Plus'
      ],
      price: '0 EUR',
      priceSub: 'oder Selbstbeteiligung',
      bgImage: ClearImg,
      imagePosition: '62% center'
    },
    {
      slug: 'elite-24h',
      badge: 'SMARTFIX',
      hookWord: 'SEITEN- & HECKSCHEIBE',
      titleSuffix: 'Loesung Elite 24h',
      subTitle: '24H EMERGENCY SERVICE',
      features: [
        '24h Notdienst (7 Tage die Woche erreichbar)',
        'Sofortiger Austausch vor Ort oder mobil',
        'Service Check (alle Scheiben + Cockpit)',
        'Direkte Abrechnung mit der Versicherung'
      ],
      price: '0 EUR',
      priceSub: 'oder Selbstbeteiligung',
      bgImage: EliteImg,
      imagePosition: '72% center'
    }
  ];

  return (
    <section id="pakete" className="bg-[#0b0c10] text-white pt-[10px] pb-20 px-6 md:px-12 max-w-[1500px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-black tracking-widest uppercase flex items-center justify-center space-x-3">
          <span className="w-8 h-[2px] bg-smart-red"></span>
          <span>
            Unsere <span className="text-smart-red">Pakete</span>
          </span>
          <span className="w-8 h-[2px] bg-smart-red"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {packagesData.map((pkg) => (
          <Link
            key={pkg.slug}
            to={`/pakete/${pkg.slug}`}
            className="relative bg-[#12141c] border border-gray-800/80 rounded-2xl overflow-hidden min-h-[560px] flex flex-col hover:border-smart-red/50 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div
              className="relative h-56 md:h-60 overflow-hidden border-b border-gray-800/80"
            >
              <div
                className="absolute inset-0 bg-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                style={{
                  backgroundImage: `url(${pkg.bgImage})`,
                  backgroundPosition: pkg.imagePosition
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-[#12141c]/15 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#12141c]/45 via-transparent to-[#12141c]/20"></div>
              <span className="absolute left-6 top-6 inline-block bg-smart-red/15 border border-smart-red/40 text-smart-red text-[10px] font-black tracking-wider px-2 py-0.5 rounded">
                {pkg.badge}
              </span>
            </div>

            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-smart-red via-white/40 to-transparent opacity-80"
            ></div>

            <div
              className="absolute inset-x-0 top-0 h-56 md:h-60 pointer-events-none opacity-45"
              style={{
                background: 'radial-gradient(circle at 20% 0%, rgba(229,9,20,0.20), transparent 34%)'
              }}
            ></div>

            <div className="relative z-10 flex flex-1 flex-col justify-between p-6 md:p-8 pt-5">
              <div>
              <h3 className="flex flex-col text-white mb-2 leading-tight">
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase break-words">
                  {pkg.hookWord}
                </span>
                <span className="text-sm font-bold text-gray-400 mt-1">{pkg.titleSuffix}</span>
              </h3>

              {pkg.subTitle && (
                <p className="text-[10px] font-black tracking-widest text-smart-red uppercase mb-4">
                  {pkg.subTitle}
                </p>
              )}

              <ul className="space-y-2.5 mt-5">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={feature}
                    className="flex items-start space-x-2.5 text-[13px] text-gray-300 font-medium max-w-[94%] leading-relaxed"
                  >
                    <FaCheck className="text-smart-red text-[11px] mt-1 shrink-0" />
                    <span className={idx === 0 ? 'text-gray-200 font-semibold' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
              </div>

            <div className="flex items-end justify-between mt-8 pt-4 border-t border-gray-800/70">
              <div>
                <div className="text-3xl font-black text-smart-red leading-none mb-1">{pkg.price}</div>
                <div className="text-[11px] text-gray-400 font-semibold">{pkg.priceSub}</div>
              </div>

              <span className="flex items-center space-x-2 bg-smart-red group-hover:bg-smart-red-hover text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-lg shadow-smart-red/10 active:scale-95">
                <span>Mehr erfahren</span>
                <FaArrowRight className="text-[10px]" />
              </span>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Packages;
