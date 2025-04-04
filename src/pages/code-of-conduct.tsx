import React, { useState } from 'react';

const CodeOfConduct: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#1E3A8A]">
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Code of</span>{" "}
              <span className="text-[#f47847]">Conduct</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Our Values & Guidelines
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80")',
              }}
            />
          </div>
        </div>
        </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Commitment Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Commitment" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#0a3d62] mb-8">Our Commitment</h2>
              <p className="text-lg text-gray-700 mb-6">
                We are committed to fostering an inclusive environment where creativity thrives and innovation flourishes. Our code of conduct ensures that every member of our community feels respected and valued.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#0a3d62] mb-8">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Integrity",
                  description: "We maintain the highest standards of professional integrity in all our interactions.",
                  icon: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                },
                {
                  title: "Respect",
                  description: "We treat everyone with dignity and embrace diverse perspectives.",
                  icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                },
                {
                  title: "Collaboration",
                  description: "We work together to achieve common goals and support each other.",
                  icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                },
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do.",
                  icon: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  onMouseEnter={() => setActiveSection(value.title.toLowerCase())}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d={value.icon} clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0a3d62]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Guidelines" 
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-4xl font-bold text-[#0a3d62] mb-8">Guidelines</h2>
              <ul className="space-y-4">
                {[
                  'Treat all team members with respect and courtesy',
                  'Maintain confidentiality of sensitive information',
                  'Report any violations or concerns promptly',
                  'Follow all applicable laws and regulations',
                  'Avoid conflicts of interest'
                ].map((guideline, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-gray-700 text-lg group"
                  >
                    <div className="w-3 h-3 bg-[#1E3A8A] rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </section>

      {/* Report a Concern Section */}
      <section className="py-16 bg-[#0a3d62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Report a Concern</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you witness any violations of this code of conduct, please report them to our ethics team. All reports will be handled confidentially.
          </p>
          <button className="bg-[#f47847] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors flex items-center mx-auto">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            Contact Ethics Team
          </button>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#0a3d62] mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Employee Handbook', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Ethics Guidelines', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { title: 'Reporting Procedures', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Training Materials', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
            ].map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0a3d62] group-hover:text-[#1E3A8A] transition-colors duration-300">
                  {resource.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
        </section>

      {/* Footer */}
      <div className="bg-gray-50 py-8">
        <div className="text-center text-gray-500 text-sm space-y-1">
          <p>Last updated: February 2024</p>
          <p>Version 2.0.1</p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct; 