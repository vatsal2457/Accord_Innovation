import React from 'react';

const Career: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[#0C4A6E]">
        <div className="container mx-auto px-4 h-screen flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Join Our</span>{" "}
              <span className="text-[#f47847]">Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Build Your Career with Accord Innovations
            </p>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300 mt-4">
              Join a dynamic team of innovators and shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 bg-[#f47847] text-white text-lg font-semibold rounded-lg hover:bg-[#e66a3a] transition-colors duration-300">
                View Openings
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E] via-[#0C4A6E]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Career Opportunities
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team. Explore our current openings and find your next opportunity.
            </p>

            {/* Job Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Software Development */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Software Development</h3>
                <p className="text-gray-600 mb-6">
                  Join our development team and work on cutting-edge projects using the latest technologies.
                </p>
                <button className="text-[#0C4A6E] font-semibold hover:text-[#f47847] transition-colors duration-300">
                  View Positions →
                </button>
              </div>

              {/* Data Science */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Science</h3>
                <p className="text-gray-600 mb-6">
                  Help businesses make data-driven decisions with your analytical and machine learning expertise.
                </p>
                <button className="text-[#0C4A6E] font-semibold hover:text-[#f47847] transition-colors duration-300">
                  View Positions →
                </button>
              </div>

              {/* Project Management */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Management</h3>
                <p className="text-gray-600 mb-6">
                  Lead projects and teams to deliver successful outcomes for our clients.
                </p>
                <button className="text-[#0C4A6E] font-semibold hover:text-[#f47847] transition-colors duration-300">
                  View Positions →
                </button>
              </div>
            </div>

            {/* Why Join Us Section */}
            <div className="bg-[#0C4A6E] rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Join Accord Innovations?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                  <p className="text-gray-300">Flexible working hours and remote work options</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                  <p className="text-gray-300">Continuous learning and advancement opportunities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                  <p className="text-gray-300">Work with talented professionals in a supportive environment</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
                  <p className="text-gray-300">Health insurance, retirement plans, and performance bonuses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Application Process
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Simple steps to join our team
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Application</h3>
                  <p className="text-gray-600">Fill out our online application form and upload your resume and cover letter.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Screening</h3>
                  <p className="text-gray-600">Our HR team will review your application and contact you if your profile matches our requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Assessment</h3>
                  <p className="text-gray-600">You may be asked to complete a technical assessment or coding challenge relevant to the position.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interviews</h3>
                  <p className="text-gray-600">Meet with our team members through video or in-person interviews to discuss your experience and skills.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">5</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer & Onboarding</h3>
                  <p className="text-gray-600">Receive an offer letter and begin your journey with Accord Innovations after completing the onboarding process.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="px-8 py-4 bg-[#0C4A6E] text-white text-lg font-semibold rounded-lg hover:bg-[#0a3d62] transition-colors duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
