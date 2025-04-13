import React from 'react';
import Hero from '../components/Hero';

const Pharmaceutical: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Pharmaceutical"
        subtitle="Innovation"
        description="Advancing pharmaceutical operations with technology solutions that enhance research, development, and manufacturing processes for better healthcare outcomes."
        backgroundImage="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Pharmaceutical Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Importance of IT Solutions Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#0a3d62]">Importance of</span>{" "}
                <span className="text-[#f47847]">IT Solutions</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  In the pharmaceutical sector, IT solutions are the linchpin that connects research, development, production, and distribution. Technologies such as data analytics, artificial intelligence (AI), and cloud computing are transforming the industry. They enable faster drug discovery through data-driven insights, streamline regulatory processes, and enhance supply chain efficiency.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  IT solutions also play a crucial role in ensuring patient safety by maintaining the integrity and security of sensitive medical data. Digital transformation in pharmaceuticals enables companies to accelerate time-to-market, reduce development costs, and ensure compliance with stringent regulatory requirements while improving overall operational efficiency.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Accord Innovations' Contribution" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#f47847]">Accord Innovations'</span>{" "}
                <span className="text-[#0a3d62]">Contribution</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Accord Innovations is your trusted partner in the pharmaceutical industry, offering tailored IT solutions to address the sector's unique challenges. We understand the critical importance of accelerating drug development, maintaining regulatory compliance, and optimizing operations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our suite of IT solutions empowers pharmaceutical companies to harness the full potential of data analytics, AI, and digital transformation. With Accord Innovations by your side, you can expedite innovation, improve patient outcomes, and navigate the intricate landscape of pharmaceuticals with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pharmaceutical;
