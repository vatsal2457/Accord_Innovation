import React from 'react';
import Hero from '../components/Hero';

const BankingAndFinancialServices: React.FC = () => {
  return (
    <div>
      <Hero
        title="Banking & Financial"
        subtitle="Services"
        description="Transforming financial institutions with cutting-edge technology solutions that drive innovation, security, and customer satisfaction."
        backgroundImage="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default BankingAndFinancialServices;
