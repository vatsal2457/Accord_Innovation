import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a3d62]">
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Vision &</span>{" "}
              <span className="text-[#f47847]">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Guiding principles that shape our journey towards excellence and innovation in technology solutions.
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] via-[#0a3d62]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#0a3d62]">Our</span>{" "}
                <span className="text-[#f47847]">Vision</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We pride ourselves on being a globally enabled and trusted advisor, guiding businesses to overcome their toughest challenges. At Accord Innovations, we acknowledge that one size does not fit all, and hence our solutions are tailor-made to specifically adapt readily to our client's unique needs. With transparency and partnership at the core, we ensure quality-driven and cost-effective solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Vision" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Mission Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Mission" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#f47847]">Our</span>{" "}
                <span className="text-[#0a3d62]">Mission</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Accord Innovations, our mission is to propel businesses towards excellence by crafting tailor-made, innovative solutions. We strive to blend coming-of-age technology, determination, and long-standing industry expertise to exceed the expectations of our esteemed clients. With a commitment to quality, cost-effectiveness, and global leadership, we aim to be the dependable partner that harnesses the power of technology to empower growth and transform challenges into opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission; 