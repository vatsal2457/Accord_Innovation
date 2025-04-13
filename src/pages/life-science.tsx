import React from 'react';
import Hero from '../components/Hero';

const LifeScience: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Life"
        subtitle="Science"
        description="Advancing life sciences with innovative technology solutions that accelerate research, development, and breakthrough discoveries."
        backgroundImage="https://images.unsplash.com/photo-1530026405186-ed1f9ae7b6c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Life Science Content */}
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
                  The life sciences industry relies heavily on advanced technology solutions to drive innovation and accelerate research. IT solutions enable efficient data management, analysis, and collaboration across research teams and institutions.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  From genomic sequencing to drug discovery, technology plays a crucial role in processing vast amounts of data, simulating complex biological processes, and ensuring regulatory compliance. These solutions help researchers make breakthrough discoveries and bring life-saving treatments to market faster.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1530026405186-ed1f9ae7b6c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                  Accord Innovations provides cutting-edge IT solutions designed specifically for the life sciences industry. Our expertise in data analytics, laboratory information management systems, and research workflow automation helps organizations streamline their operations and accelerate discoveries.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We leverage advanced technologies such as AI, machine learning, and cloud computing to enable predictive analytics, automated data processing, and secure collaboration. With Accord Innovations as your technology partner, you can focus on breakthrough research while we handle the technological infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeScience;
