import React, { useState } from 'react';

const ExecutiveLeadershipTeam: React.FC = () => {
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a3d62] mb-16">
            MEET OUR TEAM
          </h2>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 bg-gradient-to-r from-[#0a3d62] to-[#1e4d7b] rounded-xl p-10 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">12+</p>
              <p className="text-gray-200 text-lg">Leaders</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">5+</p>
              <p className="text-gray-200 text-lg">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">15+</p>
              <p className="text-gray-200 text-lg">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">100+</p>
              <p className="text-gray-200 text-lg">Team Members</p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Member 1 - Group CEO & Founder */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 1 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Krishna.png"
                    alt="Krishna Chaitanya Sunkara"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Krishna Chaitanya Sunkara</h3>
                  <p className="text-lg text-[#f47847] font-semibold">Group CEO & Founder</p>
                </div>
              </div>
            </div>

            {/* Member 2 - CEO */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 2 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/suchitra.png"
                    alt="Suchitra Sunkara"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Suchitra Sunkara</h3>
                  <p className="text-lg text-[#f47847] font-semibold">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            {/* Member 3 - Operations Director */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 3 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/swathi.png"
                    alt="Swathi Mula"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Swathi Mula</h3>
                  <p className="text-lg text-[#f47847] font-semibold">Operations Director</p>
                </div>
              </div>
            </div>

            {/* Member 4 - Group COO */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 4 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Alissha.png"
                    alt="Alisha Siddiqa Binti Sanmugam"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Alisha Siddiqa Binti Sanmugam</h3>
                  <p className="text-lg text-[#f47847] font-semibold">Group COO</p>
                </div>
              </div>
            </div>

            {/* Member 5 - Group CTO */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 5 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Rohit.png"
                    alt="Rohit Krupal"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Rohit Krupal</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">Group CTO / Country Head - Malaysia</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.197c0-.957-.349-1.617-1.219-1.617-.681 0-1.086.412-1.264.808-.065.159-.082.381-.082.602V16h-2v-6h2v.835c.414-.397.902-.661 1.562-.661 1.11 0 1.94.67 1.94 2.111V16z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 6 - Group CFO */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 6 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/ambika.png"
                    alt="Ambika Ayeappan"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Ambika Ayeappan</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">Group CFO</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.197c0-.957-.349-1.617-1.219-1.617-.681 0-1.086.412-1.264.808-.065.159-.082.381-.082.602V16h-2v-6h2v.835c.414-.397.902-.661 1.562-.661 1.11 0 1.94.67 1.94 2.111V16z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 7 - CEO & Director Indonesia */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 7 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(7)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/kumar.png"
                    alt="Kumar Nityanand"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Kumar Nityanand</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">CEO & Director - Indonesia</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.197c0-.957-.349-1.617-1.219-1.617-.681 0-1.086.412-1.264.808-.065.159-.082.381-.082.602V16h-2v-6h2v.835c.414-.397.902-.661 1.562-.661 1.11 0 1.94.67 1.94 2.111V16z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 8 - Country Head Thailand */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 8 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(8)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Abhishek.png"
                    alt="Abhishek Gupta"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Abhishek Gupta</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">Country Head - Thailand</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.197c0-.957-.349-1.617-1.219-1.617-.681 0-1.086.412-1.264.808-.065.159-.082.381-.082.602V16h-2v-6h2v.835c.414-.397.902-.661 1.562-.661 1.11 0 1.94.67 1.94 2.111V16z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 9 - Group VP HR & Operations */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 9 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(9)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Deepika.png"
                    alt="Deepika Parashar"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Deepika Parashar</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">Group Vice President - HR & OPERATIONS</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.197c0-.957-.349-1.617-1.219-1.617-.681 0-1.086.412-1.264.808-.065.159-.082.381-.082.602V16h-2v-6h2v.835c.414-.397.902-.661 1.562-.661 1.11 0 1.94.67 1.94 2.111V16z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 10 - Group VP Talent Acquisition */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 10 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(10)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Rupal.png"
                    alt="Rupal Pandey"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Rupal Pandey</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">Group Vice President - Talent Acquisition & Delivery</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.197c0-.957-.349-1.617-1.219-1.617-.681 0-1.086.412-1.264.808-.065.159-.082.381-.082.602V16h-2v-6h2v.835c.414-.397.902-.661 1.562-.661 1.11 0 1.94.67 1.94 2.111V16z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 11 - VP HR & Operations */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 11 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(11)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Kriti.png"
                    alt="Kirti Sharma"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Kriti Sharma</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">Vice President - HR & OPERATIONS</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Member 12 - Operations Manager */}
            <div 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 ease-in-out ${
                hoveredCard === 12 ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(12)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                <div className="relative">
                  <img 
                    src="/images/Santhosh.png"
                    alt="Santhosh Kumar Pamula"
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-grow bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-2xl text-[#0a3d62] font-bold mb-2">Santhosh Kumar Pamula</h3>
                  <p className="text-lg text-[#f47847] font-semibold mb-4">Operations Manager</p>
                  <div className="flex gap-4 mb-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-[#0a3d62] rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:bg-[#f47847]"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Leading innovation and strategic growth at Accord Innovations, driving digital transformation across Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#0a3d62] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team and help drive innovation forward.
          </p>
          <button className="bg-[#f47847] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e56736] transition-colors duration-300">
            View Career Opportunities
          </button>
      </div>
      </section>
    </div>
  );
};

export default ExecutiveLeadershipTeam; 