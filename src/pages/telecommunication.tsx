import React from 'react';
import Hero from '../components/Hero';

const Telecommunication: React.FC = () => {
  return (
    <div>
      <Hero
        title="Telecommunication"
        subtitle="Solutions"
        description="Enabling seamless connectivity with innovative technology solutions that power the future of communication and digital transformation."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Telecommunication;
