import React from 'react';
import Hero from '../components/Hero';

const Energy: React.FC = () => {
  return (
    <div>
      <Hero
        title="Energy"
        subtitle="Solutions"
        description="Powering the future of energy with innovative technology solutions that optimize operations, enhance sustainability, and drive efficiency."
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Energy;
