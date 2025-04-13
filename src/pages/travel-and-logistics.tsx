import React from 'react';
import Hero from '../components/Hero';

const TravelAndLogistics: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Travel &"
        subtitle="Logistics"
        description="Revolutionizing travel and logistics operations with smart technology solutions that optimize routes, enhance efficiency, and improve customer satisfaction."
        backgroundImage="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Travel and Logistics Content */}
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
                In this landscape, IT solutions emerge as the catalysts of change. They facilitate real-time tracking, optimize route planning, enhance supply chain visibility, and enable seamless booking experiences. Moreover, the power of data analytics and AI-driven insights empowers companies to make informed decisions, adapt to market dynamics, and elevate service quality.                </p>
               
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Importance of IT Solutions" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Accord Innovations' Contribution Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
                Accord Innovations plays a pivotal role in empowering Travel & Logistics businesses with cutting-edge IT solutions. Our expertise spans the entire industry spectrum, from airlines to shipping, and we understand the unique challenges each sub-sector faces. We offer tailored IT solutions that address your specific pain points, streamline operations, and enhance customer satisfaction. With our partnership, you'll not only navigate the complexities of this industry but also position yourself as a leader in delivering efficient and customer-centric services.                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelAndLogistics;
