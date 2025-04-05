import React from 'react';

const Career: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-[70vh] bg-[#0C4A6E]">
        <div className="container mx-auto px-4 h-[70vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Join Our</span>{" "}
              <span className="text-[#f47847]">Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Build Your Career with Accord Innovations
            </p>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300 mt-3">
              Join a dynamic team of innovators and shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="px-8 py-3 bg-[#f47847] text-white text-lg font-semibold rounded-lg hover:bg-[#e66a3a] transition-colors duration-300">
                View Openings
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
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

      {/* New Career Opportunities Section with Grid Layout */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Career Opportunities
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team. Explore our current openings and find your next opportunity.
            </p>

            {/* Job Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

              {/* UI/UX Design */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  Create intuitive and engaging user experiences that delight our clients and their customers.
                </p>
                <button className="text-[#0C4A6E] font-semibold hover:text-[#f47847] transition-colors duration-300">
                  View Positions →
                </button>
              </div>

              {/* Quality Assurance */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-6">
                  Ensure our software meets the highest standards of quality, reliability, and performance.
                </p>
                <button className="text-[#0C4A6E] font-semibold hover:text-[#f47847] transition-colors duration-300">
                  View Positions →
                </button>
              </div>

              {/* DevOps */}
              <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps</h3>
                <p className="text-gray-600 mb-6">
                  Bridge the gap between development and operations to ensure smooth deployment and maintenance.
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

      {/* Employee Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="text-[#0C4A6E]">Life at</span>{" "}
                <span className="text-[#f47847]">Accord</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our team members about their experiences and what makes Accord Innovations a great place to work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Sarah Johnson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                    <p className="text-[#f47847]">Senior Software Engineer</p>
                  </div>
                </div>
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#f47847] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "Working at Accord has been transformative for my career. The collaborative environment and focus on innovation have allowed me to grow both personally and professionally. The work-life balance is excellent, and I've never felt more valued as an employee."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">5 years at Accord</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                      alt="Michael Chen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                    <p className="text-[#f47847]">Data Scientist</p>
                  </div>
                </div>
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#f47847] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "The projects I work on at Accord are challenging and meaningful. I've had the opportunity to apply cutting-edge machine learning techniques to solve real-world problems. The company invests in our professional development, and I've attended several conferences and training programs."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">3 years at Accord</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                      alt="Priya Patel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Priya Patel</h3>
                    <p className="text-[#f47847]">UI/UX Designer</p>
                  </div>
                </div>
                <div className="mb-6">
                  <svg className="w-8 h-8 text-[#f47847] mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 italic">
                    "The design team at Accord is incredibly collaborative. We work closely with developers and clients to create beautiful, functional interfaces. I appreciate the company's commitment to work-life balance and the flexible remote work options."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">2 years at Accord</span>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button className="px-8 py-4 bg-[#0C4A6E] text-white text-lg font-semibold rounded-lg hover:bg-[#0a3d62] transition-colors duration-300">
                Join Our Team
              </button>
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
