import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import BusinessSolutions from './components/BusinessSolutions';
import Footer from './components/Footer';
import ShopSection from './components/ShopSection';
import AboutUs from './components/AboutUs';
import PackageDetailPage from './components/PackageDetailPage';

const HomePage = () => (
  <>
    <Helmet>
      <title>Autoglas-Reparatur & -Austausch | SmartFix</title>
      <meta
        name="description"
        content="Professionelle Autoglas-Reparatur und Scheibenaustausch in Hamm. Schnelle Hilfe bei Steinschlag fuer Windschutzscheiben, Seitenscheiben und Heckscheiben."
      />
    </Helmet>

    <main>
      <Hero />
      <Packages />
      <ShopSection />
      <AboutUs />
      {/* <BusinessSolutions /> */}
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pakete/:slug" element={<PackageDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
