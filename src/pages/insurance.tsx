import React from 'react';
import Hero from '../components/Hero';

const Insurance: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Insurance"
        subtitle="Innovation"
        description="Transforming insurance operations with technology solutions that enhance risk assessment, claims processing, and customer experience."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Insurance Content */}
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
                  In the insurance industry, IT solutions are essential for modernizing operations, improving risk assessment, and enhancing customer experience. The digital transformation of insurance processes enables more accurate underwriting, faster claims processing, and personalized policy offerings.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Advanced analytics, artificial intelligence, and machine learning technologies allow insurance companies to analyze vast amounts of data to identify patterns, predict risks, and automate routine tasks. This digital evolution is crucial for staying competitive in a rapidly changing market where customers expect seamless digital experiences and personalized services.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2111&q=80" 
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
                  Accord Innovations provides comprehensive insurance technology solutions that address the unique challenges of the insurance industry. Our suite includes policy management systems, claims processing platforms, risk assessment tools, and customer relationship management solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in implementing AI-powered analytics for risk assessment, automated claims processing workflows, and digital customer engagement platforms. Our solutions enable insurance companies to streamline operations, reduce processing times, enhance fraud detection, and deliver personalized services that improve customer satisfaction and retention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
