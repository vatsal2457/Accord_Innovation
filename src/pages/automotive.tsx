import React from 'react';
import Hero from '../components/Hero';

const Automotive: React.FC = () => {
  return (
    <div>
      <Hero
        title="Automotive"
        subtitle="Innovation"
        description="Driving the future of automotive with technology solutions that enhance manufacturing, safety, and the overall driving experience."
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Automotive;
