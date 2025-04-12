import React from 'react';
import Hero from '../components/Hero';

const Healthcare: React.FC = () => {
  return (
    <div>
      <Hero
        title="Healthcare"
        subtitle="Innovation"
        description="Revolutionizing healthcare delivery with technology solutions that improve patient care, streamline operations, and enhance medical outcomes."
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Healthcare;
