import React from 'react';
import Hero from '../components/Hero';

const MedicalDevices: React.FC = () => {
  return (
    <div>
      <Hero
        title="Medical"
        subtitle="Devices"
        description="Advancing healthcare technology with innovative solutions that enhance patient care, improve diagnostics, and streamline medical device operations."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default MedicalDevices;
