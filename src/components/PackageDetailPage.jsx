import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaEuroSign,
  FaMagic,
  FaShieldAlt,
  FaTools,
  FaWhatsapp
} from 'react-icons/fa';
import BasicHero from '../assets/package-basic-hero.png';
import ClearHero from '../assets/package-clear-hero.png';
import EliteHero from '../assets/package-elite-hero.png';

const phoneNumber = '4915755092629';

const packageData = {
  basic: {
    name: 'SmartFix Basic',
    kicker: 'Steinschlag Reparatur',
    label: 'BASIC',
    title: 'Steinschlag reparieren, bevor aus einem Punkt ein Riss wird.',
    lead: 'Das Basic Paket ist fuer kleine Schaeden mit grosser Wirkung: SmartFix prueft deine Windschutzscheibe, repariert geeignete Steinschlaege professionell und bringt Sicht, Sicherheit und Kostenklaerung in einen sauberen Ablauf.',
    image: BasicHero,
    price: '0 EUR',
    priceSub: 'mit Teilkasko moeglich',
    whatsapp: 'Hallo SmartFix, ich moechte einen Termin fuer das SmartFix Basic Paket anfragen.',
    seoTitle: 'SmartFix Basic | Steinschlag Reparatur und Autoglas Check',
    seoDescription: 'SmartFix Basic fuer Steinschlag Reparatur, Scheibenreinigung, Reifen- und Wischwasser-Check. Autoscheibe kostenlos pruefen lassen und WhatsApp Termin sichern.',
    stats: ['unter 30 Min.', 'Smart Repair', 'Teilkasko Hilfe'],
    highlights: [
      'Smart Repair bei geeignetem Steinschlag',
      'Schnelle Reparatur in kurzer Zeit',
      'Smart Clean: Frontscheibe, Seitenscheiben und vorne saugen',
      'Smart Check: Reifenhoehe und Wischwasserfuellung',
      'Unterstuetzung bei der Teilkasko-Abwicklung'
    ],
    included: [
      ['Smart Repair', 'Professionelle Scheibenreparatur bei reparaturfaehigem Steinschlag.'],
      ['Smart Clean', 'Frontscheibe und Seitenscheiben reinigen, vorderen Bereich saugen.'],
      ['Smart Check', 'Kurzer Sicherheitsblick auf Reifenhoehe und Wischwasser.'],
      ['Smart Costs', 'Bei passender Teilkasko koennen fuer die Reparatur 0 EUR direkte Kosten entstehen.']
    ],
    storyTitle: 'Der schnelle Sicherheits-Reset',
    story: 'Ein Steinschlag sieht oft harmlos aus, kann aber durch Kaelte, Hitze oder Vibrationen groesser werden. SmartFix Basic ist deshalb nicht nur Reparatur, sondern eine schnelle Entscheidung: pruefen, reparieren, reinigen und wieder ruhig fahren.',
    note: 'Ob eine Reparatur moeglich ist, haengt von Groesse und Position des Schadens ab.',
    steps: ['Schaden per WhatsApp senden', 'Kostenlos pruefen lassen', 'Scheibe reparieren und Fahrzeug kurz checken']
  },
  clear: {
    name: 'SmartFix Clear',
    kicker: 'Scheibentausch in OE-Qualitaet',
    label: 'CLEAR',
    title: 'Wenn Reparatur nicht reicht, braucht die neue Scheibe ein sauberes System.',
    lead: 'Clear ist fuer Schaeden gedacht, bei denen ein Austausch die bessere Loesung ist. Du bekommst hochwertigen Scheibentausch, saubere Montage, Reinigung und eine transparente Klaerung der Kosten je nach Versicherung oder Selbstbeteiligung.',
    image: ClearHero,
    price: '0 EUR',
    priceSub: 'oder Selbstbeteiligung',
    whatsapp: 'Hallo SmartFix, ich moechte einen Termin fuer das SmartFix Clear Paket anfragen.',
    seoTitle: 'SmartFix Clear | Autoscheibe wechseln und Scheibentausch',
    seoDescription: 'SmartFix Clear fuer hochwertigen Autoscheiben Austausch in OE-Qualitaet, Reinigung, Wischer-Check und faire Kostenklaerung per WhatsApp.',
    stats: ['OE-Qualitaet', 'Clean Check', 'Kostenklarheit'],
    highlights: [
      'Hochwertiger Scheibenaustausch in OE-Qualitaet',
      'Ideal bei Rissen, Sichtfeld-Schaeden oder groesseren Bruechen',
      'Alle Scheiben reinigen und Innenraum vorne saugen',
      'Wischer, Wischwasser und Reifenhoehe pruefen',
      'Klare Kostenuebersicht je nach Schaden und Selbstbeteiligung'
    ],
    included: [
      ['Change', 'Austausch der beschaedigten Scheibe in hochwertiger Qualitaet.'],
      ['Clean', 'Alle Scheiben reinigen und den Innenraum vorne saugen.'],
      ['Check', 'Wischer, Wischwasser und Reifenhoehe kontrollieren.'],
      ['Costs', 'Kostenweg transparent erklaeren: Teilkasko, Selbstbeteiligung oder Direktzahlung.']
    ],
    storyTitle: 'Mehr als nur Glas tauschen',
    story: 'Eine neue Scheibe muss dicht, sauber und sicher passen. Gleichzeitig sollen Wischerbild, Sicht und Fahrzeugzustand stimmen. SmartFix Clear verbindet den eigentlichen Scheibentausch deshalb mit einem sichtbaren Vorher-Nachher-Ergebnis und klarer Kommunikation zu den Kosten.',
    note: 'Je nach Schaden sind 0 EUR, Selbstbeteiligung oder direkte Zahlung moeglich.',
    steps: ['Foto und Fahrzeugdaten senden', 'Reparatur oder Austausch klaeren', 'Scheibe wechseln und sauber uebergeben']
  },
  'elite-24h': {
    name: 'SmartFix Elite 24h',
    kicker: 'Autoglas Notfallservice',
    label: 'ELITE 24H',
    title: 'Premium Hilfe fuer Front-, Seiten- und Heckscheiben, wenn es schnell gehen muss.',
    lead: 'Elite 24h ist das Paket fuer dringende Autoglas-Schaeden. SmartFix koordiniert Reparatur oder Austausch, kuemmert sich um Reinigung, Check, Innenraum-Extras und hilft dir, schnell wieder sicher unterwegs zu sein.',
    image: EliteHero,
    price: '0 EUR',
    priceSub: 'je nach Schaden',
    whatsapp: 'Hallo SmartFix, ich brauche Hilfe mit dem SmartFix Elite 24h Paket.',
    seoTitle: 'SmartFix Elite 24h | Autoglas Notfallservice und Scheibentausch',
    seoDescription: 'SmartFix Elite 24h fuer Autoglas Notfaelle, Frontscheibe, Seitenscheibe, Heckscheibe, Reparatur oder Austausch, Reinigung und Premium Check.',
    stats: ['24h Service', 'Mobil & schnell', 'VIP Check'],
    highlights: [
      '24h Service fuer dringende Autoglas-Schaeden',
      'Reparatur oder Scheibentausch in OE-Qualitaet',
      'Hilfe bei Frontscheibe, Seitenscheibe und Heckscheibe',
      'Alle Scheiben reinigen, Innenraum vorne saugen und Cockpit reinigen',
      'Innenraumfilter-Check, Air Fresh und Premium Wischer moeglich'
    ],
    included: [
      ['Repair or Change', 'Reparatur oder Austausch passend zum Schadensbild.'],
      ['Clean', 'Scheiben reinigen, Innenraum vorne saugen und Cockpit auffrischen.'],
      ['Check', 'Wischer, Wischwasser, Reifenhoehe und Innenraumfilter pruefen.'],
      ['Costs', 'Faire Kostenklaerung je nach Versicherung, Schaden und Selbstbeteiligung.']
    ],
    storyTitle: 'Der Service fuer Situationen, die nicht warten',
    story: 'Bei Seiten- oder Heckscheiben, starken Rissen oder akuten Sichtproblemen zaehlt Tempo. Elite 24h ist als kompletter Ablauf gedacht: melden, einschaetzen, Termin koordinieren, Glasproblem loesen und das Fahrzeug mit Premium-Check zurueckgeben.',
    note: '24h Verfuegbarkeit kann von Fahrzeugtyp, Glasart und Teileverfuegbarkeit abhaengen.',
    steps: ['Notfall per WhatsApp melden', '24h Loesung koordinieren', 'Reparatur oder Austausch mit Premium Check']
  }
};

const addons = [
  ['HX Aqua', 'Scheibenversiegelung fuer bessere Sicht bei Regen.', '39,99 EUR'],
  ['Premium Plus', 'HX Aqua plus Premium Scheibenwischer vorne von Bosch.', '79,98 EUR'],
  ['Deluxe Elite', 'HX Aqua, Wischer vorne und hinten, Innenraumfilter und Air Fresh.', '169,97 EUR']
];

const iconMap = [FaTools, FaMagic, FaShieldAlt, FaEuroSign];

const PackageDetailPage = () => {
  const { slug } = useParams();
  const pkg = packageData[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [slug]);

  if (!pkg) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(pkg.whatsapp)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pkg.name,
    serviceType: 'Autoglas Reparatur und Scheibentausch',
    provider: {
      '@type': 'LocalBusiness',
      name: 'SmartFix Mobile Autoglas',
      telephone: '+49 157 55092629'
    },
    areaServed: 'Deutschland',
    description: pkg.seoDescription
  };

  return (
    <>
      <Helmet>
        <title>{pkg.seoTitle}</title>
        <meta name="description" content={pkg.seoDescription} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main className="bg-dark-bg text-white">
        <section className="relative min-h-[calc(100vh-73px)] overflow-hidden border-b border-white/10">
          <img src={pkg.image} alt={`${pkg.name} Autoglas Service`} className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050609] via-[#08090d]/86 to-[#08090d]/22"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(229,9,20,0.28),transparent_28%),linear-gradient(to_top,#0b0c10_0%,transparent_42%)]"></div>
          <div className="absolute left-0 top-0 h-full w-1 bg-smart-red"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20 min-h-[calc(100vh-73px)] flex flex-col justify-between gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-10 items-center">
              <div className="max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition mb-8">
                  <FaArrowLeft className="text-[10px]" />
                  Zurueck zu den Paketen
                </Link>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-smart-red text-white px-3 py-1 rounded text-[11px] font-black tracking-widest">{pkg.label}</span>
                  <span className="text-smart-red text-[11px] font-black uppercase tracking-[0.28em]">{pkg.kicker}</span>
                </div>

                <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[0.92] tracking-tight max-w-5xl drop-shadow-2xl">
                  {pkg.title}
                </h1>

                <p className="text-gray-200 text-base md:text-xl leading-relaxed max-w-2xl mt-7 drop-shadow">
                  {pkg.lead}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-9">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb85a] text-white px-6 py-4 rounded-xl font-black transition shadow-lg shadow-[#25D366]/20">
                    <FaWhatsapp />
                    Termin per WhatsApp
                  </a>
                  <a href="tel:+4915755092629" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-6 py-4 rounded-xl font-black transition backdrop-blur-md">
                    Direkt anrufen
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -inset-4 border border-smart-red/20 rounded-2xl rotate-2"></div>
                <div className="relative bg-black/62 border border-white/15 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.32em] text-gray-500 font-black">SmartFix Scan</div>
                      <div className="text-2xl font-black mt-1">Paket Diagnose</div>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-white text-black flex flex-col items-center justify-center">
                      <span className="text-2xl font-black leading-none">{pkg.price}</span>
                      <span className="text-[9px] text-gray-500 font-black uppercase">Start</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {pkg.stats.map((stat, index) => (
                      <div key={stat} className="grid grid-cols-[40px_1fr] gap-3 items-center">
                        <div className="h-10 rounded-lg bg-smart-red/15 border border-smart-red/35 text-smart-red flex items-center justify-center font-black text-xs">
                          0{index + 1}
                        </div>
                        <div className="h-10 rounded-lg bg-white/6 border border-white/10 flex items-center px-3 text-sm font-black">
                          {stat}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mt-5">
                    Foto vom Schaden senden, Empfehlung bekommen und den passenden Termin direkt sichern.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {pkg.stats.map((stat) => (
                <div key={stat} className="bg-white/8 border border-white/12 rounded-xl px-5 py-4 backdrop-blur-md">
                  <div className="text-[10px] uppercase tracking-widest text-smart-red font-black mb-1">Vorteil</div>
                  <div className="text-lg font-black">{stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_390px] gap-8 items-start">
            <div className="space-y-8">
              <article className="relative overflow-hidden bg-[#12141c] border border-gray-800 rounded-2xl p-6 md:p-10">
                <div className="absolute right-0 top-0 w-52 h-full bg-gradient-to-l from-smart-red/10 to-transparent"></div>
                <div className="relative max-w-3xl">
                  <div className="text-smart-red text-xs font-black uppercase tracking-[0.24em] mb-4">Leistungsprofil</div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none mb-6">{pkg.storyTitle}</h2>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">{pkg.story}</p>
                </div>
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.included.map(([title, text], index) => {
                  const Icon = iconMap[index] || FaCheck;
                  return (
                    <div key={title} className="group bg-[#101219] border border-gray-800 rounded-2xl p-6 min-h-48 hover:border-smart-red/50 transition">
                      <div className="flex items-start justify-between gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-smart-red/10 border border-smart-red/30 text-smart-red flex items-center justify-center">
                          <Icon />
                        </div>
                        <span className="text-5xl font-black text-white/5 group-hover:text-smart-red/15 transition">0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-black mb-3">{title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1fr] gap-4">
                <div className="bg-smart-red rounded-2xl p-6 md:p-8 text-white">
                  <div className="text-xs uppercase tracking-[0.24em] font-black opacity-80 mb-4">Warum SmartFix</div>
                  <h2 className="text-3xl font-black leading-none">Sicht, Sicherheit und Kosten in einem Ablauf.</h2>
                </div>
                <ul className="grid gap-3 bg-[#12141c] border border-gray-800 rounded-2xl p-6">
                  {pkg.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-smart-red text-white flex items-center justify-center shrink-0">
                        <FaCheck className="text-[10px]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#12141c] border border-gray-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-7">
                  <FaClock className="text-smart-red" />
                  <h2 className="text-2xl md:text-3xl font-black">So laeuft es ab</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {pkg.steps.map((step, index) => (
                    <div key={step} className="relative overflow-hidden bg-dark-bg border border-gray-800 rounded-xl p-5 min-h-40">
                      <div className="absolute right-3 top-2 text-6xl text-white/5 font-black">0{index + 1}</div>
                      <div className="relative text-smart-red text-xs font-black uppercase tracking-widest mb-8">Step 0{index + 1}</div>
                      <div className="relative font-black leading-tight">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="xl:sticky xl:top-24 space-y-5">
              <div className="bg-white text-[#0b0c10] rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <FaWhatsapp className="text-[#25D366] text-2xl" />
                  <h2 className="text-2xl font-black leading-none">Direkt anfragen</h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Sende ein Foto vom Schaden, Fahrzeugmodell und Versicherungsstatus. SmartFix meldet sich mit der passenden Empfehlung.
                </p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb85a] text-white px-5 py-4 rounded-xl font-black transition">
                  WhatsApp oeffnen
                  <FaArrowRight className="text-xs" />
                </a>
              </div>

              <div className="bg-[#12141c] border border-gray-800 rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-800">
                  <h2 className="font-black uppercase tracking-widest text-sm">Zzgl. buchbar</h2>
                </div>
                {addons.map(([name, desc, price]) => (
                  <div key={name} className="grid grid-cols-[1fr_auto] gap-3 px-5 py-4 border-b border-gray-800 last:border-b-0">
                    <div>
                      <div className="font-black">{name}</div>
                      <div className="text-xs text-gray-500 leading-relaxed mt-1">{desc}</div>
                    </div>
                    <div className="text-smart-red font-black">{price}</div>
                  </div>
                ))}
              </div>

              <div className="bg-smart-red/10 border border-smart-red/30 rounded-2xl p-5">
                <div className="font-black text-smart-red mb-2">Wichtiger Hinweis</div>
                <p className="text-sm text-gray-300 leading-relaxed">{pkg.note}</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default PackageDetailPage;
