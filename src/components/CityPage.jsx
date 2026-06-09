import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cities } from '../data/cities';
import Hero from '../components/Hero'; // Pretpostavljam da ti je Hero ovdje

const CityPage = () => {
  const { city } = useParams();
  const data = cities[city];

  // Ako neko ukuca link koji ne postoji (npr. /autoglas/berlin), vrati ga na početnu
  if (!data) return <Navigate to="/" />;

  // SEO podaci
  const title = `Autoglas-Service ${data.name} | Mobiler Steinschlag-Experte`;
  const description = `Steinschlag in ${data.name}? Wir sind Ihr mobiler Autoglas-Partner in ${data.state}. Schnelle Reparatur & Scheibentausch direkt vor Ort. Jetzt Termin buchen!`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* JSON-LD Schema za lokalni biznis */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Deine Firma Name",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": data.name,
              "addressRegion": data.state
            },
            "areaServed": {
              "@type": "City",
              "name": data.name
            }
          })}
        </script>
      </Helmet>

      {/* Ovde pozivamo Hero, ali mu šaljemo podatke o gradu */}
      <Hero 
        city={data.name} 
        state={data.state} 
      />

      {/* Dodatni sadržaj ispod Hero sekcije za bolji SEO */}
      <section className="bg-[#0b0c10] py-16 px-6 md:px-16 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Warum unser mobiler Autoglas-Service in {data.name}?</h2>
          <p className="text-gray-400 mb-4">
            Sie haben einen Steinschlag oder benötigen einen Scheibentausch in <strong>{data.name}</strong>? 
            Wir sind auf mobile Autoglas-Reparaturen spezialisiert. Statt in eine Werkstatt zu fahren und lange zu warten, 
            kommen wir direkt zu Ihnen – egal ob zu Hause, bei der Arbeit oder unterwegs.
          </p>
          <p className="text-gray-400">
            Wir bedienen das gesamte Gebiet in <strong>{data.state}</strong> und sorgen für eine schnelle, 
            saubere und fachgerechte Abwicklung. Mit Ihrer Teilkasko profitieren Sie oft von unserem Service zum Nulltarif.
          </p>
        </div>
      </section>
    </>
  );
};

export default CityPage;