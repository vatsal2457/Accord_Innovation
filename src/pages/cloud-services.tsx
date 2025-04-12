import React from 'react';
import Hero from '../components/Hero';

const CloudServices: React.FC = () => {
  return (
    <div>
      <Hero
        title="Cloud"
        subtitle="Services"
        description="Transform service management with comprehensive cloud services that enhance scalability, flexibility, and cost-efficiency for your business operations."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default CloudServices; 