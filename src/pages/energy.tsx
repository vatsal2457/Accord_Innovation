import React from 'react';
import Hero from '../components/Hero';

const Energy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Energy"
        subtitle="Innovation"
        description="Powering the future of energy with technology solutions that enhance efficiency, sustainability, and operational excellence."
        backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Energy Content */}
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
                  In the rapidly evolving energy sector, IT solutions are critical for addressing complex challenges such as grid reliability, renewable integration, and operational efficiency. Modern energy companies face unprecedented demands for data-driven decision making, predictive maintenance, and real-time monitoring of assets across vast geographic areas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Digital transformation in the energy industry enables organizations to optimize resource allocation, enhance safety protocols, and implement sustainable practices. From smart grid technologies to advanced analytics platforms, IT solutions provide the foundation for a more resilient, efficient, and environmentally conscious energy infrastructure.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                  Accord Innovations delivers comprehensive energy technology solutions that address the unique challenges of modern energy operations. Our suite includes grid management systems, asset performance management, predictive maintenance platforms, renewable energy integration tools, and energy analytics solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in implementing smart grid technologies, IoT-based monitoring systems, advanced analytics platforms, and cybersecurity solutions for critical infrastructure. Our solutions integrate seamlessly with existing energy systems, providing real-time visibility, predictive insights, and automated workflows that enhance operational efficiency, improve reliability, and support sustainability initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Energy;
