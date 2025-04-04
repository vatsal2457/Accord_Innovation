import React, { useState } from 'react';

const SoftwareDevelopmentServices: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({
    web: false,
    app: false,
    data: false,
    backend: false,
    tools: false,
    embedded: false
  });

  const toggleCard = (cardId: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[#0C4A6E]">
        <div className="container mx-auto px-4 h-screen flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl py-20 md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with Expert Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Enterprise-grade development services powering modern businesses forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
<div className="relative py-20 pl-20 bg-white">
  <div className="container px-4">
    {/* Section Header with Image */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      {/* Left side - Text Content */}
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Software Development Services
        </h2>
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        <p className="text-xl text-gray-700 leading-relaxed">
          We deliver cutting-edge software solutions that empower businesses to thrive in the digital age. Our expertise spans across multiple domains and technologies.
        </p>
      </div>

      {/* Right side - Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div 
          className="w-full h-[300px] rounded-lg shadow-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80")',
          }}
        />
      </div>
    </div>

    {/* Description Paragraph */}
    <div className="max-w-4xl mb-16">
      <p className="text-lg text-gray-700 leading-relaxed">
        At Accord Innovations, we offer a comprehensive suite of Software Development Services that cater to the diverse needs of businesses in the digital era. Our services are the driving force behind transforming your ideas and concepts into tangible, high-performing software solutions. Our team of experts is driven by the desire to create software that not only meets your current needs but also prepares your business for the challenges of tomorrow.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-6">
        Our structured approach ensures the development of optimum solutions with best practices in place. With a strong commitment to methodical progression, we empower businesses with tailored software development services that drive innovation and efficiency.
      </p>
    </div>
  </div>

  {/* Background Decoration */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
  </div>
</div>

      {/* Development Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
           Software Development Offerings
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Explore our comprehensive tech solutions
          </p>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development */}
            <div className="group h-[350px] [perspective:1000px]">
              <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ${flippedCards.web ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front of the card */}
                <div className="absolute inset-0 bg-[#2A3441]/90 rounded-2xl p-6 text-white shadow-md">
                  <div>
                    <div className="w-12 h-12 mb-4 text-blue-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Web Development</h3>
                    <p className="text-white/80 leading-relaxed text-sm">Our web development solutions are designed to create seamless, user-friendly, and visually appealing websites that captivate your audience and drive engagement.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('web')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#313D4F]/90 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md">
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-white/80 leading-relaxed text-sm">Our web development solutions are designed to create seamless, user-friendly, and visually appealing websites that captivate your audience and drive engagement. Whether it's building an e-commerce platform or a corporate website, we deliver results that leave a lasting impression.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('web')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card back"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="group h-[350px] [perspective:1000px]">
              <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ${flippedCards.app ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front of the card */}
                <div className="absolute inset-0 bg-[#2A3441]/90 rounded-2xl p-6 text-white shadow-md">
                  <div>
                    <div className="w-12 h-12 mb-4 text-indigo-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">App Development</h3>
                    <p className="text-white/80 leading-relaxed text-sm">In an increasingly mobile-driven world, our mobile development services cater to both Android and iOS platforms.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('app')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#313D4F]/90 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md">
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-white/80 leading-relaxed text-sm">We craft mobile apps that are intuitive, feature-rich, and built to enhance user experiences, ensuring your business is accessible on the go.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('app')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card back"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Data Science */}
            <div className="group h-[350px] [perspective:1000px]">
              <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ${flippedCards.data ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front of the card */}
                <div className="absolute inset-0 bg-[#2A3441]/90 rounded-2xl p-6 text-white shadow-md">
                  <div>
                    <div className="w-12 h-12 mb-4 text-cyan-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Data Science</h3>
                    <p className="text-white/80 leading-relaxed text-sm">Leveraging the power of data, our data science solutions provide actionable insights that drive informed decision-making.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('data')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#313D4F]/90 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md">
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-white/80 leading-relaxed text-sm">From data collection and analysis to predictive modeling, we help businesses unlock the true potential of their data.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('data')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card back"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Back-end Development */}
            <div className="group h-[350px] [perspective:1000px]">
              <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ${flippedCards.backend ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front of the card */}
                <div className="absolute inset-0 bg-[#2A3441]/90 rounded-2xl p-6 text-white shadow-md">
                  <div>
                    <div className="w-12 h-12 mb-4 text-purple-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14zM6 7h5v5H6zm7 0h5v5h-5zm-7 7h5v3H6zm7 0h5v3h-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Back-end Development</h3>
                    <p className="text-white/80 leading-relaxed text-sm">The backbone of any software system, our back-end development expertise ensures robust functionality, data management, and security.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('backend')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#313D4F]/90 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md">
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-white/80 leading-relaxed text-sm">We design the infrastructure that powers your applications, guaranteeing reliability and performance.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('backend')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card back"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Software Tools Development */}
            <div className="group h-[350px] [perspective:1000px]">
              <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ${flippedCards.tools ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front of the card */}
                <div className="absolute inset-0 bg-[#2A3441]/90 rounded-2xl p-6 text-white shadow-md">
                  <div>
                    <div className="w-12 h-12 mb-4 text-teal-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Software Tools Development</h3>
                    <p className="text-white/80 leading-relaxed text-sm">Tailored software tools are essential for optimizing business processes.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('tools')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#313D4F]/90 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md">
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-white/80 leading-relaxed text-sm">Our solutions are custom-built to streamline operations, improve efficiency, and drive productivity across your organization.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('tools')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card back"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Embedded Systems */}
            <div className="group h-[350px] [perspective:1000px]">
              <div className={`relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] ${flippedCards.embedded ? '[transform:rotateY(180deg)]' : ''}`}>
                {/* Front of the card */}
                <div className="absolute inset-0 bg-[#2A3441]/90 rounded-2xl p-6 text-white shadow-md">
                  <div>
                    <div className="w-12 h-12 mb-4 text-sky-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8zm-7-4.5l5.5 5.5H15V5.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Embedded Systems</h3>
                    <p className="text-white/80 leading-relaxed text-sm">Our embedded systems development services cater to industries where specialized hardware and software integration is essential.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('embedded')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#313D4F]/90 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md">
                  <div className="flex flex-col h-full justify-center">
                    <p className="text-white/80 leading-relaxed text-sm">We design embedded solutions that are reliable, efficient, and tailored to your specific requirements.</p>
                  </div>
                  <button 
                    onClick={() => toggleCard('embedded')}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    aria-label="Flip card back"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SoftwareDevelopmentServices; 