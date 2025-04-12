import React from 'react';
import Hero from '../components/Hero';

const ArtificialIntelligence: React.FC = () => {
  return (
    <div>
      <Hero
        title="Artificial"
        subtitle="Intelligence"
        description="Transform service management with cutting-edge artificial intelligence solutions that automate processes, provide predictive insights, and enhance decision-making capabilities."
        backgroundImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default ArtificialIntelligence; 