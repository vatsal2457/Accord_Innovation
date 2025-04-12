import React from 'react';
import Hero from '../components/Hero';

const AiChatBot: React.FC = () => {
  return (
    <div>
      <Hero
        title="AI –"
        subtitle="Chat Bot"
        description="Transform service management with intelligent AI-powered chatbots that enhance customer support, automate responses, and provide 24/7 assistance."
        backgroundImage="https://images.unsplash.com/photo-1531746790731-6c087fecd0a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Rest of the page content will go here */}
    </div>
  );
};

export default AiChatBot; 