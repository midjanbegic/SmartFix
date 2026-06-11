import React from 'react';
import {
  LuBadgeCheck,
  LuClock3,
  LuHandshake,
  LuMapPin,
  LuShieldCheck,
} from 'react-icons/lu';
import aboutRender from '../assets/about-smartfix-van.png';

const benefits = [
  {
    icon: <LuClock3 />,
    title: 'Schnelligkeit',
    desc: 'Wir sorgen für klare Sicht innerhalb von 24 Stunden.',
  },
  {
    icon: <LuBadgeCheck />,
    title: 'Zuverlässigkeit',
    desc: 'Erfahrene Profis und Produkte in OE-Qualität.',
  },
  {
    icon: <LuHandshake />,
    title: 'Fairer Service',
    desc: 'Transparente Preise ohne versteckte Kosten.',
  },
  {
    icon: <LuShieldCheck />,
    title: 'Komplett Service',
    desc: 'Direkte Abwicklung mit Ihrer Versicherung.',
  },
  {
    icon: <LuMapPin />,
    title: '100% Mobil',
    desc: 'Wir kommen überall in Deutschland zu Ihnen.',
  },
];

const WarumSmartfix = () => {
  return (
    <section id="ueber-uns" className="bg-[#05070a] px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-[1500px] overflow-hidden rounded-[10px] border border-white/10 bg-[#070b0f] shadow-[0_0_0_1px_rgba(229,9,20,0.12),0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(229,9,20,0.24),transparent_20%),linear-gradient(90deg,rgba(7,11,15,0.98)_0%,rgba(7,11,15,0.96)_55%,rgba(7,11,15,0.18)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <img
            src={aboutRender}
            alt="SmartFix mobiler Autoglas Service"
            className="h-full w-full object-cover object-center opacity-95 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b0f] via-[#070b0f]/48 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#070b0f] to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-smart-red to-transparent" />
        <div className="absolute inset-x-8 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 grid min-h-[150px] w-full grid-cols-1 items-center gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[175px_1fr_330px] lg:gap-5 lg:px-6 lg:py-4 xl:grid-cols-[195px_1fr_430px]">
          <div className="text-center lg:text-left">
            <h2 className="text-[32px] font-black leading-[0.95] tracking-tight text-white sm:text-[38px] lg:text-[34px] xl:text-[38px]">
              Warum
              <span className="block text-smart-red">SmartFix?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-5">
            {benefits.map((item) => (
              <article key={item.title} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-smart-red bg-black/40 text-[28px] text-white shadow-[0_0_0_4px_rgba(229,9,20,0.16),0_0_22px_rgba(229,9,20,0.85),inset_0_0_18px_rgba(229,9,20,0.2)]">
                  {item.icon}
                </div>
                <h3 className="text-[12px] font-black uppercase leading-tight tracking-wide text-white sm:text-[13px]">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-[150px] text-[11px] font-semibold leading-snug text-white/78 sm:text-[12px] lg:text-[10px] xl:text-[11px]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default WarumSmartfix;




