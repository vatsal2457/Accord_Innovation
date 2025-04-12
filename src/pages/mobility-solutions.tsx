import React from 'react';
import Hero from '../components/Hero';

const MobilitySolutions: React.FC = () => {
  return (
    <div>
      <Hero
        title="Mobility"
        subtitle="Solutions"
        description="Transform service management with innovative mobility solutions that enable seamless access to services, enhance productivity, and improve user experience across devices."
        backgroundImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default MobilitySolutions; 