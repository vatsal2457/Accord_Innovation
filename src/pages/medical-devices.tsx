import React from 'react';
import Hero from '../components/Hero';

const MedicalDevices: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Medical"
        subtitle="Devices"
        description="Advancing medical device technology with innovative solutions that enhance patient care, improve diagnostics, and streamline healthcare delivery."
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Medical Devices Content */}
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
                  In the medical device industry, IT solutions are essential for ensuring regulatory compliance, maintaining quality standards, and enabling innovation in device design and functionality. Modern medical devices require sophisticated software systems for data collection, analysis, and integration with healthcare networks.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Digital transformation in medical devices enables improved patient outcomes through enhanced diagnostics, remote monitoring capabilities, and seamless data sharing between devices and healthcare providers. From connected medical devices to advanced imaging systems, IT solutions provide the foundation for more effective and personalized healthcare delivery.
                </p>
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
                  Accord Innovations provides comprehensive medical device technology solutions that address the unique challenges of the healthcare industry. Our suite includes device connectivity platforms, medical imaging systems, patient monitoring solutions, and regulatory compliance management tools.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in developing secure, reliable, and user-friendly software for medical devices, ensuring compliance with regulatory requirements while maximizing clinical utility. Our solutions enable seamless integration with electronic health records, support remote patient monitoring, and facilitate data-driven clinical decision-making, ultimately improving patient outcomes and healthcare efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalDevices;
