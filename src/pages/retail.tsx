import React from 'react';
import Hero from '../components/Hero';

const Retail: React.FC = () => {
  return (
    <div>
      <Hero
        title="Retail"
        subtitle="Transformation"
        description="Empowering retail businesses with digital solutions that enhance customer experience, optimize operations, and drive growth in the modern marketplace."
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Retail;
