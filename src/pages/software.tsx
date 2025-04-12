import React from 'react';
import Hero from '../components/Hero';

const Software: React.FC = () => {
  return (
    <div>
      <Hero
        title="Software"
        subtitle="Solutions"
        description="Empowering businesses with cutting-edge software solutions that drive innovation, efficiency, and growth in the digital age."
        backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Software;
