import React from 'react';

const SoftwareDevelopmentServices: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[#1B2431] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto leading-tight">
            Transform Your Business with Expert Software Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Enterprise-grade development services powering modern businesses forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Development Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
           Software Development Services
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Explore our comprehensive tech solutions
          </p>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Web Development */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute inset-0 bg-blue-500 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-12 h-12 mb-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                      <p className="text-white/90">Create stunning, responsive websites with modern frameworks</p>
                    </div>
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-blue-600 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold mb-4">Technologies We Use:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>React.js & Next.js</li>
                      <li>Vue.js & Nuxt.js</li>
                      <li>Angular</li>
                      <li>Tailwind CSS</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute inset-0 bg-red-400 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-12 h-12 mb-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">App Development</h3>
                      <p className="text-white/90">Native and cross-platform mobile applications development</p>
                    </div>
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-red-500 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold mb-4">App Solutions:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>iOS Development</li>
                      <li>Android Development</li>
                      <li>React Native</li>
                      <li>Flutter</li>
                      <li>Cross-platform Apps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Science */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute inset-0 bg-emerald-500 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-12 h-12 mb-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Data Science</h3>
                      <p className="text-white/90">Transform data into actionable insights and solutions</p>
                    </div>
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-emerald-600 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold mb-4">Data Services:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Machine Learning</li>
                      <li>Predictive Analytics</li>
                      <li>Data Visualization</li>
                      <li>Big Data Processing</li>
                      <li>AI Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Back-end Development */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute inset-0 bg-purple-500 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-12 h-12 mb-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14zM6 7h5v5H6zm7 0h5v5h-5zm-7 7h5v3H6zm7 0h5v3h-5z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Back-end Development</h3>
                      <p className="text-white/90">Robust server-side solutions and database architecture</p>
                    </div>
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-purple-600 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold mb-4">Backend Stack:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Node.js & Express</li>
                      <li>Python & Django</li>
                      <li>Java Spring Boot</li>
                      <li>Database Design</li>
                      <li>Microservices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Tools Development */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute inset-0 bg-orange-400 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-12 h-12 mb-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Software Tools Development</h3>
                      <p className="text-white/90">Custom software tools for enterprise efficiency</p>
                    </div>
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-orange-500 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold mb-4">Tool Categories:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Automation Tools</li>
                      <li>Business Intelligence</li>
                      <li>Workflow Solutions</li>
                      <li>Custom Integrations</li>
                      <li>Enterprise Software</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* API Development */}
            <div className="group h-[300px] [perspective:1000px]">
              <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of the card */}
                <div className="absolute inset-0 bg-emerald-500 rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-12 h-12 mb-4">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8zm-7-4.5l5.5 5.5H15V5.5z"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">API Development</h3>
                      <p className="text-white/90">RESTful and GraphQL API design and implementation</p>
                    </div>
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Back of the card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-emerald-600 p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold mb-4">API Services:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>RESTful APIs</li>
                      <li>GraphQL</li>
                      <li>API Gateway</li>
                      <li>Microservices</li>
                      <li>API Documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Transforming Ideas into Powerful Solutions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Accord Innovations, we specialize in delivering cutting-edge software solutions that drive business growth and digital transformation. Our expert team combines technical excellence with innovative thinking to create robust, scalable, and user-friendly applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Custom Software Development */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Custom Software Development</h3>
            <p className="text-gray-600">
              Tailored solutions designed to meet your specific business needs, from enterprise applications to specialized tools.
            </p>
          </div>

          {/* Web Application Development */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Web Application Development</h3>
            <p className="text-gray-600">
              Responsive and dynamic web applications built with modern technologies and frameworks for optimal performance.
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile App Development</h3>
            <p className="text-gray-600">
              Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
            </p>
          </div>

          {/* API Development & Integration */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-plug"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">API Development & Integration</h3>
            <p className="text-gray-600">
              Seamless integration services and robust API development to connect your systems and applications.
            </p>
          </div>

          {/* DevOps Services */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-sync-alt"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">DevOps Services</h3>
            <p className="text-gray-600">
              Streamlined development and deployment processes with automated testing and continuous integration.
            </p>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Frontend</h4>
              <p className="text-gray-600">React, Angular, Vue.js</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Backend</h4>
              <p className="text-gray-600">Node.js, Python, Java</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Mobile</h4>
              <p className="text-gray-600">React Native, Flutter</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Cloud</h4>
              <p className="text-gray-600">AWS, Azure, GCP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentServices; 