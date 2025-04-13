import React from 'react';
import Hero from '../components/Hero';

const Manufacturing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Manufacturing"
        subtitle="Innovation"
        description="Transforming manufacturing with cutting-edge technology solutions that enhance efficiency, productivity, and quality."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Manufacturing Content */}
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
                  In today's manufacturing landscape, IT solutions are crucial for maintaining competitive advantage and operational excellence. From smart factories to Industry 4.0 initiatives, digital transformation is revolutionizing how products are designed, produced, and delivered.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Advanced technologies like IoT, AI, and automation enable manufacturers to optimize production processes, reduce downtime, and improve quality control. This digital evolution is essential for meeting modern market demands while maintaining cost efficiency and sustainability.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-full h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                  Accord Innovations delivers comprehensive IT solutions designed specifically for the manufacturing sector. Our expertise in industrial automation, predictive maintenance, and quality management systems helps organizations optimize their operations and enhance productivity.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We leverage cutting-edge technologies such as IoT, AI, and cloud computing to enable smart manufacturing, real-time monitoring, and data-driven decision making. With Accord Innovations as your technology partner, you can achieve operational excellence and drive sustainable growth in the manufacturing industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
