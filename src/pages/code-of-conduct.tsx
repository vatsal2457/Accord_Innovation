import React, { useState } from 'react';

const CodeOfConduct: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-r from-[#0a3d62] to-[#1e4d7b] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-8 md:pl-20 relative z-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Code of</span>{" "}
              <span className="text-[#f47847] relative">
                Conduct
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#f47847] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300 leading-relaxed">
              Our Values & Guidelines
            </p>
          </div>
          
         
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Our Commitment Section */}
        <div 
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg transform hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          onMouseEnter={() => setActiveSection('commitment')}
          onMouseLeave={() => setActiveSection(null)}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0a3d62] flex items-center">
            <span className="w-10 h-1 bg-[#f47847] mr-4"></span>
            Our Commitment
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to fostering an inclusive environment where creativity thrives and innovation flourishes. Our code of conduct ensures that every member of our community feels respected and valued.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-[#0a3d62] flex items-center">
            <span className="w-10 h-1 bg-[#f47847] mr-4"></span>
            Core Values
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Integrity */}
            <div 
              className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                activeSection === 'integrity' ? 'border-2 border-[#f47847]' : ''
              }`}
              onMouseEnter={() => setActiveSection('integrity')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0a3d62]">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">We maintain the highest standards of professional integrity in all our interactions.</p>
            </div>

            {/* Respect */}
            <div 
              className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                activeSection === 'respect' ? 'border-2 border-[#f47847]' : ''
              }`}
              onMouseEnter={() => setActiveSection('respect')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0a3d62]">Respect</h3>
              <p className="text-gray-600 leading-relaxed">We treat everyone with dignity and embrace diverse perspectives.</p>
            </div>

            {/* Collaboration */}
            <div 
              className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                activeSection === 'collaboration' ? 'border-2 border-[#f47847]' : ''
              }`}
              onMouseEnter={() => setActiveSection('collaboration')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0a3d62]">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">We work together to achieve common goals and support each other.</p>
            </div>

            {/* Excellence */}
            <div 
              className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                activeSection === 'excellence' ? 'border-2 border-[#f47847]' : ''
              }`}
              onMouseEnter={() => setActiveSection('excellence')}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0a3d62]">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">We strive for excellence in everything we do.</p>
            </div>
          </div>
        </div>

        {/* Guidelines Section */}
        <div 
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg transform hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          onMouseEnter={() => setActiveSection('guidelines')}
          onMouseLeave={() => setActiveSection(null)}
        >
          <h2 className="text-3xl font-bold mb-8 text-[#0a3d62] flex items-center">
            <span className="w-10 h-1 bg-[#f47847] mr-4"></span>
            Guidelines
          </h2>
          <ul className="space-y-6">
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
                <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                {guideline}
              </li>
            ))}
          </ul>
        </div>

        {/* Report a Concern Section */}
        <div 
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg transform hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          onMouseEnter={() => setActiveSection('report')}
          onMouseLeave={() => setActiveSection(null)}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0a3d62] flex items-center">
            <span className="w-10 h-1 bg-[#f47847] mr-4"></span>
            Report a Concern
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            If you witness any violations of this code of conduct, please report them to our ethics team. All reports will be handled confidentially.
          </p>
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            Contact Ethics Team
          </button>
        </div>

        {/* Additional Resources Section */}
        <div 
          className="bg-white rounded-2xl p-8 mb-12 shadow-lg"
          onMouseEnter={() => setActiveSection('resources')}
          onMouseLeave={() => setActiveSection(null)}
        >
          <h2 className="text-3xl font-bold mb-8 text-[#0a3d62] flex items-center">
            <span className="w-10 h-1 bg-[#f47847] mr-4"></span>
            Additional Resources
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Employee Handbook', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Ethics Guidelines', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
              { title: 'Reporting Procedures', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Training Materials', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
            ].map((resource, index) => (
              <a 
                key={index}
                href="#" 
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={resource.icon} />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{resource.title}</span>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm space-y-1">
          <p>Last updated: February 2024</p>
          <p>Version 2.0.1</p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct; 