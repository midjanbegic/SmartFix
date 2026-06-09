import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Packages from './components/Packages';
import BusinessSolutions from './components/BusinessSolutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg overflow-x-hidden">
      <Helmet>
        {/* Nemacki naslov i opis za Google pretragu */}
        <title>Autoglas-Reparatur & -Austausch | SmartFix</title>
        <meta name="description" content="Professionelle Autoglas-Reparatur und Scheibenaustausch in Hamm. Schnelle Hilfe bei Steinschlag für Windschutzscheiben, Seitenscheiben & Heckscheiben." />
      </Helmet>

      <Navbar />
      
      <main>
        <Hero />
        <Packages />
        <BusinessSolutions />
      </main>

      <Footer />
    </div>
  );
}

export default App;