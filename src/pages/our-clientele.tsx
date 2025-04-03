import React from 'react';

const OurClientele: React.FC = () => {
  // Generate 72 client cards with placeholder data
  const clients = Array.from({ length: 72 }, (_, index) => ({
    id: index + 1,
    name: `Client ${index + 1}`,
    logo: `https://via.placeholder.com/150x80?text=Logo+${index + 1}`,
    industry: ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Retail', 'Education'][index % 6],
  }));

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
                backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
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
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden transform hover:scale-105"
              >
                <div className="p-4 flex flex-col items-center justify-center h-full">
                  <div className="w-full h-20 flex items-center justify-center mb-3">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0a3d62] text-center">{client.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination or Load More Button */}
          <div className="mt-12 text-center">
            <button className="bg-[#0a3d62] text-white px-6 py-2 rounded-full hover:bg-[#f47847] transition-colors duration-300">
              View More Clients
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClientele; 