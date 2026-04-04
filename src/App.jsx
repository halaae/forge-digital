import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyAts from './components/WhyAts';
import WhyPortfolio from './components/WhyPortfolio';
import ChooseUs from './components/ChooseUs';
import Contact from './components/Contact';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyAts />
        <WhyPortfolio />
        <ChooseUs />
      </main>
      <Contact />
    </div>
  );
}

export default App;
