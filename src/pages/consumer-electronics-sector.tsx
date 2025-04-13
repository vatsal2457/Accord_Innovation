import React from 'react';
import Hero from '../components/Hero';

const ConsumerElectronicsSector: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Consumer"
        subtitle="Electronics"
        description="Driving innovation in consumer electronics with technology solutions that enhance product development, manufacturing, and user experience."
        backgroundImage="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Consumer Electronics Content */}
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
                  The consumer electronics industry is driven by rapid technological advancements and changing consumer preferences. IT solutions play a crucial role in product development, manufacturing efficiency, and delivering enhanced user experiences.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  From smart home devices to wearable technology, the integration of IT solutions enables seamless connectivity, data analytics, and personalized experiences. These technologies help manufacturers stay competitive, optimize production processes, and meet the evolving demands of tech-savvy consumers.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                  Accord Innovations provides comprehensive IT solutions tailored to the consumer electronics industry. Our expertise in product development, manufacturing automation, and user experience design helps companies create innovative and competitive products.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We leverage cutting-edge technologies such as IoT, AI, and cloud computing to enable smart manufacturing, predictive maintenance, and enhanced product functionality. With Accord Innovations as your technology partner, you can stay ahead of market trends and deliver exceptional consumer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerElectronicsSector;
