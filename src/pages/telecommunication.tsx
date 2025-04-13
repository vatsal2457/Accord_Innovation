import React from 'react';
import Hero from '../components/Hero';

const Telecommunication: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Telecommunication"
        subtitle="Solutions"
        description="Enabling seamless connectivity with innovative technology solutions that power the future of communication and digital transformation."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Telecommunication Content */}
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
                  At Accord Innovations, we take a comprehensive approach to telecommunications technology solutions that focuses on understanding your unique connectivity challenges and service delivery requirements. Our team of experienced telecommunications technology specialists works closely with you to design and implement solutions that drive real value for your organization and enhance network performance.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We believe in agile methodologies, continuous integration, and iterative development to ensure that your telecommunications technology solutions are delivered on time, within budget, and with the highest quality standards. Our approach emphasizes collaboration, transparency, and adaptability throughout the implementation process.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                  Accord Innovations provides comprehensive telecommunications solutions that address the unique challenges of the industry. Our expertise in network infrastructure, service delivery, and customer experience helps organizations optimize their operations and enhance service quality.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We leverage advanced technologies such as 5G, IoT, and cloud computing to enable seamless connectivity, improved network performance, and enhanced customer experiences. With Accord Innovations as your technology partner, you can stay ahead of industry trends and deliver exceptional telecommunications services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telecommunication;
