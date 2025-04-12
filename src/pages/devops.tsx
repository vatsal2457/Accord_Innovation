import React from 'react';
import Hero from '../components/Hero';

const DevOps: React.FC = () => {
  return (
    <div>
      <Hero
        title="DevOps"
        subtitle="Solutions"
        description="Transform service management with DevOps solutions that bridge the gap between development and operations, enabling faster delivery, higher quality, and improved collaboration."
        backgroundImage="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default DevOps; 