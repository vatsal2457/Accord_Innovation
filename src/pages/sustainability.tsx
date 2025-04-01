import React, { useState } from 'react';

const Sustainability: React.FC = () => {
  const [isEthicalExpanded, setIsEthicalExpanded] = useState(false);

  return (
    <div>
      <div className="relative h-96 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">
            Sustainability
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Sustainable Progress"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Journey of Sustainable Progress</h1>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                At Accord Innovations, our overarching objective is to seamlessly blend technological excellence with a conscientious commitment to sustainability. We firmly believe that every action, no matter how small, has the potential to create profound and lasting impact. Sustainability isn't a mere buzzword in our ethos, it's a pledge that guides our daily operations.
              </p>
              <p>
                In our day-to-day functioning, we hold ourselves accountable to a higher standard. From embracing energy-efficient office practices to cultivating purposeful partnerships, every decision we make is underpinned by a genuine concern for the environment and society at large. We recognize that our choices today shape the world of tomorrow, and it's a responsibility we wholeheartedly embrace.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Ethical Responsibility */}
          <div className="relative">
            <div className="relative h-80 rounded-xl overflow-hidden group mb-4">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1453847668862-487637052f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80")',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="relative h-full flex flex-col items-center justify-center p-6">
                <h3 className="text-2xl font-bold text-white text-center mb-4">Ethical Responsibility</h3>
                <button
                  onClick={() => setIsEthicalExpanded(!isEthicalExpanded)}
                  className="text-white text-3xl font-bold hover:text-gray-200 transition-colors duration-300"
                >
                  {isEthicalExpanded ? '-' : '+'}
                </button>
              </div>
            </div>
            {isEthicalExpanded && (
              <div className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 ease-in-out">
                <p className="text-gray-600 leading-relaxed">
                  We care deeply about sustainability because it aligns with our ethical responsibility. We believe that as a responsible corporate citizen, it's our duty to minimize our environmental impact. Sustainability remains an integral part of our moral compass.
                </p>
              </div>
            )}
          </div>

          {/* Card 2 - Responsible Operations */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="text-2xl font-bold text-white text-center">Responsible Operations</h3>
            </div>
          </div>

          {/* Card 3 - Ethical Partnership */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="text-2xl font-bold text-white text-center">Ethical Partnership</h3>
            </div>
          </div>

          {/* Card 4 - Community Engagement */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="text-2xl font-bold text-white text-center">Community Engagement</h3>
            </div>
          </div>

          {/* Card 5 - Employee Well-being */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="text-2xl font-bold text-white text-center">Employee Well-being</h3>
            </div>
          </div>

          {/* Card 6 - Continuous Progress */}
          <div className="relative h-80 rounded-xl overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
            <div className="relative h-full flex items-center justify-center p-6">
              <h3 className="text-2xl font-bold text-white text-center">Continuous Progress</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability; 