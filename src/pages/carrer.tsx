import React, { useState, useEffect } from 'react';

const Career: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    jobCategories: false,
    whyJoinUs: false,
    testimonials: false,
    applicationProcess: false,
    benefits: false
  });

  useEffect(() => {
    // Trigger animations when component mounts
    const timer1 = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const timer2 = setTimeout(() => setIsVisible(prev => ({ ...prev, jobCategories: true })), 300);
    const timer3 = setTimeout(() => setIsVisible(prev => ({ ...prev, whyJoinUs: true })), 500);
    const timer4 = setTimeout(() => setIsVisible(prev => ({ ...prev, testimonials: true })), 700);
    const timer5 = setTimeout(() => setIsVisible(prev => ({ ...prev, applicationProcess: true })), 900);
    const timer6 = setTimeout(() => setIsVisible(prev => ({ ...prev, benefits: true })), 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className={`relative min-h-[70vh] bg-gradient-to-br from-[#0C4A6E] to-[#0a3d62] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 h-[70vh] flex items-center relative z-10">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-4 lg:pl-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Join Our</span>{" "}
              <span className="text-[#f47847]">Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-200">
              Build Your Career with Accord Innovations
            </p>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-200 mt-3">
              Join a dynamic team of innovators and shape the future of technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="px-8 py-3 bg-[#f47847] text-white text-lg font-semibold rounded-lg hover:bg-[#e66a3a] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                View Openings
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right side - Decorative Elements */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#f47847]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#0C4A6E]/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.jobCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of passionate professionals and help shape the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Software Development',
                description: 'Build innovative solutions using cutting-edge technologies',
                icon: '💻',
                delay: 300
              },
              {
                title: 'Data Science',
                description: 'Transform data into actionable insights and drive business growth',
                icon: '📊',
                delay: 400
              },
              {
                title: 'Project Management',
                description: 'Lead teams and deliver successful projects on time',
                icon: '🎯',
                delay: 500
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible.jobCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${category.delay}ms` }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <button className="bg-[#0C4A6E] text-white px-6 py-3 rounded-lg hover:bg-[#0C4A6E]/90 transition-colors duration-300">
                  View Positions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className="py-20 bg-gradient-to-br from-[#0C4A6E] to-[#0C4A6E]/80 text-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold mb-4">Benefits & Perk</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We offer comprehensive benefits to support your growth and well-being
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Health & Wellness',
                description: 'Comprehensive health coverage, wellness programs, and mental health support',
                icon: '🏥',
                delay: 300
              },
              {
                title: 'Learning & Development',
                description: 'Continuous learning opportunities, certifications, and skill development programs',
                icon: '📚',
                delay: 400
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible work hours, remote work options, and generous time off',
                icon: '⚖️',
                delay: 500
              },
              {
                title: 'Team Building',
                description: 'Regular team events, social activities, and community engagement',
                icon: '🤝',
                delay: 600
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 transition-all duration-1000 hover:bg-white/20 ${
                  isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${benefit.delay}ms` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <div className={`bg-[#0C4A6E] rounded-2xl p-12 text-white transition-all duration-1000 ${isVisible.whyJoinUs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join Accord Innovations?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
            <p className="text-gray-300">Flexible working hours and remote work options</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-300">Continuous learning and advancement opportunities</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
            <p className="text-gray-300">Work with talented professionals in a supportive environment</p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all duration-300">
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

      {/* Employee Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-[#0C4A6E]">Life at</span>{" "}
                <span className="text-[#f47847]">Accord</span>
              </h2>
              <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Hear from our team members about their experiences and what makes Accord Innovations a great place to work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
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
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
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
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
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
              <button className="px-8 py-4 bg-[#0C4A6E] text-white text-lg font-semibold rounded-lg hover:bg-[#0a3d62] transition-colors duration-300 transform hover:scale-105">
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
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 text-center transition-all duration-1000 ${isVisible.applicationProcess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Our Application Process
            </h2>
            <p className={`text-xl text-gray-600 mb-12 text-center transition-all duration-1000 delay-200 ${isVisible.applicationProcess ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Simple steps to join our team
            </p>

            <div className="space-y-8">
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Your Application</h3>
                  <p className="text-gray-600">Fill out our online application form and upload your resume and cover letter.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Screening</h3>
                  <p className="text-gray-600">Our HR team will review your application and contact you if your profile matches our requirements.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Assessment</h3>
                  <p className="text-gray-600">You may be asked to complete a technical assessment or coding challenge relevant to the position.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '600ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Interviews</h3>
                  <p className="text-gray-600">Meet with our team members through video or in-person interviews to discuss your experience and skills.</p>
                </div>
              </div>
              <div className={`flex items-start transition-all duration-500 ${isVisible.applicationProcess ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '700ms' }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-6">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer & Onboarding</h3>
                  <p className="text-gray-600">Receive an offer letter and begin your journey with Accord Innovations after completing the onboarding process.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="px-8 py-4 bg-[#0C4A6E] text-white text-lg font-semibold rounded-lg hover:bg-[#0a3d62] transition-colors duration-300 transform hover:scale-105">
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
