import React from 'react';
import Hero from '../components/Hero';

const LifeScience: React.FC = () => {
  return (
    <div>
      <Hero
        title="Life"
        subtitle="Science"
        description="Advancing life sciences with innovative technology solutions that accelerate research, development, and breakthrough discoveries."
        backgroundImage="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default LifeScience;
