import React from 'react';
import Hero from '../components/Hero';
import Chatbot from '../components/Chatbot';
import Features from '../components/Features';
import ToolsSection from '../components/ToolsSection';
import EthicalSection from '../components/EthicalSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Features />
      <ToolsSection />
      <EthicalSection />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Home;
