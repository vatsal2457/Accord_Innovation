import React from 'react';
import Hero from '../components/Hero';

const Pharmaceutical: React.FC = () => {
  return (
    <div>
      <Hero
        title="Pharmaceutical"
        subtitle="Innovation"
        description="Advancing pharmaceutical operations with technology solutions that enhance research, development, and manufacturing processes for better healthcare outcomes."
        backgroundImage="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Pharmaceutical;
