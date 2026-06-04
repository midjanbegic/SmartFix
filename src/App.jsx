import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Uvozimo Hero sekciju
import Packages from './components/Packages';
import BusinessSolutions from './components/BusinessSolutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <BusinessSolutions />
        <Footer />
        {/* Ovdje ćemo dodavati ostale sekcije (Paketi, Shop...) */}
      </main>
    </div>
  );
}

export default App;