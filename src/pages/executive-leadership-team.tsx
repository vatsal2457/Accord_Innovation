import React from 'react';

const ExecutiveLeadershipTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a3d62]">
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Executive</span>{" "}
              <span className="text-[#f47847]">Leadership Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Meet the visionary leaders driving innovation and excellence at Accord Innovations.
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] via-[#0a3d62]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Leadership Team Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Leadership team members will be added here */}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveLeadershipTeam; 