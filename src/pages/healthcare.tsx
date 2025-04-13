import React from 'react';
import Hero from '../components/Hero';

const Healthcare: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Healthcare"
        subtitle="Innovation"
        description="Transforming healthcare delivery with technology solutions that enhance patient care, streamline operations, and improve outcomes."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Healthcare Content */}
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
                In the healthcare sector, IT solutions are the cornerstone of delivering better services, increasing customer satisfaction, and ensuring regulatory compliance. These solutions streamline administrative processes, improve data accuracy, enhance patient care, and enable healthcare providers to make informed decisions. From electronic health records (EHR) systems to telemedicine platforms, IT solutions play a crucial role in revolutionizing healthcare delivery.                </p>
                
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
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
                Accord Innovations is your trusted partner in the healthcare industry. We offer world-class IT solutions and services customized for payers, pharmacy benefit managers (PBMs), providers, and other healthcare stakeholders. Our comprehensive range of services enhances brand value and ensures the efficient functioning of healthcare organizations. With years of experience in the healthcare sector, Accord Innovations is committed to delivering innovative solutions that address the unique challenges of the industry.                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
