import React, { useState } from 'react';

const OurClientele: React.FC = () => {
  // Generate 72 client cards with placeholder data
  const clients = Array.from({ length: 72 }, (_, index) => ({
    id: index + 1,
    name: `Client ${index + 1}`,
    logo: `https://via.placeholder.com/150x80?text=Logo+${index + 1}`,
    industry: ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Education'][index % 6],
  }));

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-r from-[#0a3d62] to-[#1e4d7b]">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Our</span>{" "}
              <span className="text-[#f47847]">Clients</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Discover the organizations that trust Accord Innovations to deliver exceptional solutions and drive their digital transformation.
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] via-[#0a3d62]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a3d62] mb-16">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          
          {/* Client Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {clients.map((client) => (
              <div 
                key={client.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 ${
                  hoveredCard === client.id 
                    ? 'scale-105 shadow-xl border-2 border-[#f47847]' 
                    : 'hover:shadow-lg border border-gray-100'
                }`}
                onMouseEnter={() => setHoveredCard(client.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-4 flex flex-col items-center justify-center h-full">
                  <div className="w-full h-24 flex items-center justify-center mb-3 bg-gradient-to-b from-gray-50 to-white p-2 rounded-lg">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-full max-w-full object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-[#0a3d62] text-center">{client.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                      client.industry === 'Technology' ? 'bg-blue-500' :
                      client.industry === 'Finance' ? 'bg-green-500' :
                      client.industry === 'Healthcare' ? 'bg-red-500' :
                      client.industry === 'Manufacturing' ? 'bg-yellow-500' :
                      client.industry === 'Retail' ? 'bg-purple-500' :
                      'bg-indigo-500'
                    }`}></span>
                    <p className="text-xs text-gray-500">{client.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination or Load More Button */}
          <div className="mt-16 text-center">
            <button className="bg-[#0a3d62] text-white px-8 py-3 rounded-full hover:bg-[#f47847] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
              View More Clients
            </button>
          </div>
        </div>
      </section>

      {/* Industry Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-[#0a3d62] mb-8">
            Filter by Industry
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Education'].map((industry) => (
              <button 
                key={industry}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  industry === 'All' 
                    ? 'bg-[#0a3d62] text-white' 
                    : 'bg-white text-[#0a3d62] border border-[#0a3d62] hover:bg-[#f47847] hover:text-white hover:border-[#f47847]'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClientele; 