import React from 'react';

const CodeOfConduct: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a3d62]">
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Code of</span>{" "}
              <span className="text-[#f47847]">Conduct</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Our commitment to ethical business practices and professional standards.
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

      {/* Code of Conduct Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Ethical Standards</h2>
            <p className="text-gray-700 mb-6">
              {/* Introduction to code of conduct will be added here */}
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Core principles and guidelines will be added here */}
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Reporting Violations</h2>
            <p className="text-gray-700">
              {/* Reporting procedures and contact information will be added here */}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct; 