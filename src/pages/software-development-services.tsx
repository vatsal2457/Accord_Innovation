import React, { useState } from 'react';

const SoftwareDevelopmentServices: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of software development services does Accord Innovations offer?",
      answer: "Accord Innovations offers a comprehensive range of software development services including web development, mobile app development, data science solutions, back-end development, software tools development, and embedded systems. Our services are tailored to meet the specific needs of businesses across various industries."
    },
    {
      question: "How long does it typically take to complete a software development project?",
      answer: "Project timelines vary depending on complexity, scope, and requirements. Simple projects might take 4-8 weeks, while complex enterprise solutions could take 6-12 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process."
    },
    {
      question: "What is your approach to software development?",
      answer: "We follow an agile development methodology that emphasizes iterative progress, continuous feedback, and adaptability. Our process includes requirements gathering, planning, design, development, testing, deployment, and ongoing maintenance. This approach ensures we deliver high-quality solutions that meet your business needs."
    },
    {
      question: "Do you provide ongoing support and maintenance after project completion?",
      answer: "Yes, we offer comprehensive post-development support and maintenance services. This includes bug fixes, performance optimization, security updates, and feature enhancements. Our team is committed to ensuring your software continues to perform optimally long after initial deployment."
    },
    {
      question: "How do you ensure the security of the software you develop?",
      answer: "Security is a top priority in all our development projects. We implement industry best practices for secure coding, conduct regular security audits, perform penetration testing, and follow OWASP guidelines. We also ensure compliance with relevant data protection regulations such as GDPR, HIPAA, and PCI DSS where applicable."
    },
    {
      question: "Can you work with our existing technology stack?",
      answer: "Absolutely. We have experience with a wide range of technologies and can adapt to your existing tech stack. Whether you're using legacy systems or cutting-edge technologies, our team can integrate new solutions seamlessly with your current infrastructure."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[#0C4A6E]">
        <div className="container mx-auto px-4 h-screen flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Software</span>{" "}
              <span className="text-[#f47847]">Development</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Transform Your Business with Expert Software Solutions
            </p>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300 mt-4">
              Enterprise-grade development services powering modern businesses forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 bg-[#f47847] text-white text-lg font-semibold rounded-lg hover:bg-[#e66a3a] transition-colors duration-300">
                Get Started
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
                backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </div>
      {/* Software Development Services Introduction Section */}
<div className="relative py-20 bg-white">
        <div className="container px-4">
          {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Software Development Services
            </h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
    </div>

    {/* First Part - Text Left, Image Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Cutting-Edge Solutions</h3>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
              We deliver cutting-edge software solutions that empower businesses to thrive in the digital age. Our expertise spans across multiple domains and technologies.
            </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Accord Innovations, we offer a comprehensive suite of Software Development Services that cater to the diverse needs of businesses in the digital era. Our services are the driving force behind transforming your ideas and concepts into tangible, high-performing software solutions.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E] via-[#0C4A6E]/80 to-transparent z-10" />
        <div 
          className="w-full h-[300px] rounded-lg shadow-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80")',
          }}
        />
      </div>
          </div>

    {/* Second Part - Image Left, Text Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
      <div className="md:order-2">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Expert Team</h3>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team of experts is driven by the desire to create software that not only meets your current needs but also prepares your business for the challenges of tomorrow.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
              Our structured approach ensures the development of optimum solutions with best practices in place. With a strong commitment to methodical progression, we empower businesses with tailored software development services that drive innovation and efficiency.
            </p>
        </div>
      </div>
      <div className="relative md:order-1">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E] via-[#0C4A6E]/80 to-transparent z-10" />
        <div 
          className="w-full h-[300px] rounded-lg shadow-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80")',
          }}
        />
      </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
  </div>
</div>

      {/* End-to-End Capabilities Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              End-to-End Capabilities for Tailored Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              From concept to deployment, we provide comprehensive software development services that address every aspect of your project
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Planning & Analysis */}
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Planning & Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  We begin with a thorough analysis of your requirements, business goals, and technical constraints. Our team develops a comprehensive project plan that aligns with your objectives and timeline.
                </p>
              </div>

              {/* Design & Development */}
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Design & Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our expert designers and developers create intuitive, scalable, and secure solutions. We follow industry best practices and agile methodologies to ensure high-quality code and efficient development.
                </p>
              </div>

              {/* Testing & Deployment */}
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Testing & Deployment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We conduct rigorous testing to identify and fix any issues before deployment. Our team handles the entire deployment process, ensuring a smooth transition to production with minimal disruption.
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Development Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Requirements Gathering</h4>
                      <p className="text-gray-600">We work closely with you to understand your business needs, user requirements, and technical specifications.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Design & Architecture</h4>
                      <p className="text-gray-600">Our team creates detailed designs and architecture plans that serve as the blueprint for development.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h4>
                      <p className="text-gray-600">We develop your solution using agile methodologies with continuous testing and feedback integration.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#0C4A6E] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Deployment & Support</h4>
                      <p className="text-gray-600">We handle deployment and provide ongoing support to ensure your solution continues to perform optimally.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C4A6E] via-[#0C4A6E]/80 to-transparent z-10 rounded-xl" />
                <div 
                  className="w-full h-[400px] rounded-xl shadow-xl bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
           

    </div>
  );
};

export default SoftwareDevelopmentServices; 