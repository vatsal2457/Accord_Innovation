import React from 'react';
import Hero from '../components/Hero';

const DataManagement: React.FC = () => {
  return (
    <div>
      <Hero
        title="Data"
        subtitle="Management"
        description="Transform service management with comprehensive data management solutions that ensure data integrity, security, and actionable insights."
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default DataManagement; 