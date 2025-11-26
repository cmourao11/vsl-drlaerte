import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-surface text-gray-100 selection:bg-purple-500 selection:text-white">
      <main className="relative">
        <Hero />
        <Features />
        <About />
        <Footer />
        <ChatWidget />
      </main>
    </div>
  );
};

export default App;