import React from 'react';
import Hero from '../components/Hero';

const ConsumerElectronicsSector: React.FC = () => {
  return (
    <div>
      <Hero
        title="Consumer"
        subtitle="Electronics"
        description="Driving innovation in consumer electronics with technology solutions that enhance product development, manufacturing, and user experience."
        backgroundImage="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default ConsumerElectronicsSector;
