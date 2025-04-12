import React from 'react';
import Hero from '../components/Hero';

const AerospaceAndAviation: React.FC = () => {
  return (
    <div>
      <Hero
        title="Aerospace &"
        subtitle="Aviation"
        description="Elevating aerospace and aviation operations with cutting-edge technology solutions that enhance safety, efficiency, and performance."
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default AerospaceAndAviation;
