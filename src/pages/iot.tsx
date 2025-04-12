import React from 'react';
import Hero from '../components/Hero';

const IoT: React.FC = () => {
  return (
    <div>
      <Hero
        title="Internet of Things"
        subtitle="Solutions"
        description="Transform service management with IoT solutions that connect devices, collect data, and enable intelligent automation for improved operational efficiency."
        backgroundImage="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default IoT; 