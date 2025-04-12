import React from 'react';
import Hero from '../components/Hero';

const TravelAndLogistics: React.FC = () => {
  return (
    <div>
      <Hero
        title="Travel &"
        subtitle="Logistics"
        description="Revolutionizing travel and logistics operations with smart technology solutions that optimize routes, enhance efficiency, and improve customer satisfaction."
        backgroundImage="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default TravelAndLogistics;
