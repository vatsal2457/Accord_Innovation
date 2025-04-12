import React from 'react';
import Hero from '../components/Hero';

const Insurance: React.FC = () => {
  return (
    <div>
      <Hero
        title="Insurance"
        subtitle="Technology"
        description="Transforming the insurance industry with digital solutions that streamline operations, enhance customer experience, and drive business growth."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default Insurance;
