import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-[#0a3d62]">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 w-3/5 h-full">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-[#0a3d62]/90"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Story Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img 
                src="/images/aa1.png" 
                alt="Accord Inception" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Right side - Text Content */}
            <div className="space-y-6">
              <div className="text-6xl font-bold text-[#f47847] mb-4">
                2011
              </div>
              <h2 className="text-4xl font-bold text-[#0a3d62] mb-6">
                Accord Inception
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Incepted in Malaysia in the year of 2011 of being valued intermediary between a company and a job seeker.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory; 