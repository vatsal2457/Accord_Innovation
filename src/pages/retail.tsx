import React from 'react';
import Hero from '../components/Hero';

const Retail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Retail"
        subtitle="Innovation"
        description="Transforming retail operations with technology solutions that enhance customer experience, streamline operations, and drive growth."
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Retail Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Importance of IT Solutions Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#0a3d62]">Importance of</span>{" "}
                <span className="text-[#f47847]">IT Solutions</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  IT solutions play a pivotal role in revolutionizing the retail sector. From optimizing customer relationship management (CRM) to enhancing supply chain management (SCM), technology is the key to achieving operational efficiency. It empowers retailers to create seamless e-business experiences, leverage advanced data warehousing and business intelligence, and develop agile technology infrastructures.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Additionally, IT solutions enable retailers to address critical areas such as cybersecurity, digital workplaces, and intelligent operations, ensuring they stay ahead in an ever-competitive market. These technologies help retailers personalize customer experiences, optimize inventory management, and implement data-driven decision-making processes.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1">
              <img 
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Accord Innovations' Contribution" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
            <div className="order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                <span className="text-[#f47847]">Accord Innovations'</span>{" "}
                <span className="text-[#0a3d62]">Contribution</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Accord Innovations brings a wealth of retail knowledge, insight, and project execution skills to help you overcome the unique challenges of the retail sector. Our expertise spans across CRM, SCM, technology infrastructure, ERP, data warehousing, and business intelligence.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We collaborate with industry specialists and customers through our Centers of Excellence in supply chain planning, merchandising, RFID, pharmacy in retail, in-store solutions, and data analytics. As your trusted partner, Accord Innovations empowers your retail business to thrive in the digital age, delivering customized solutions that optimize your operations and enhance customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retail;
