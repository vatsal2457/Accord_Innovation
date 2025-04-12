import React from 'react';
import Hero from '../components/Hero';

const Manufacturing: React.FC = () => {
  return (
    <div>
      <Hero
        title="Manufacturing"
        subtitle="Innovation"
        description="Revolutionizing manufacturing processes with smart technology solutions that enhance productivity, quality, and operational efficiency."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Manufacturing;
