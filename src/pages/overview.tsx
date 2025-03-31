import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#0a3d62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl md:text-2xl max-w-3xl">
                We are a leading technology solutions provider, helping businesses transform and innovate in the digital age.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="About Us" 
                className="rounded-lg shadow-xl w-[300px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}


      {/* Company Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Company Story" 
                className="rounded-lg shadow-xl w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-12">Bringing Innovative Technology Solutions for Your Success</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Accord Innovations, we harness the power of technology and develop innovative solutions that cater to your diverse needs in this rapidly evolving market. We are the leaders in cutting-edge technology, analytics, and consulting services. With an unwavering passion for technology, determination to solve complex problems, and a vision to create revolutionary solutions, we ensure sophisticated visual appeal, seamless usability and substantial profits.

                Quality and cost-effectiveness intertwined with innovation are the cornerstones of our approach. We strive to be your dependable solutions partner, providing outcomes that exceed your expectations.

                As a Microsoft Certified Partner, we hold ourselves to the highest industry standards, and aim to consistently deliver exceptional results in every endeavour. We cater to a wide array of key verticals, including Healthcare, Financial Services, Real Estate, Banking and Financial Services, Insurance, Telecommunications, Software, Aerospace & Aviation, Manufacturing, Retail, Consumer Electronics Sector, Energy, Travel & Logistics, Life Sciences, Medical Devices, Pharmaceutical, Automotive and the IT Industry.

                With an exceptional team of over 1000 professionals, we have amassed 15+ years of valuable experience in the IT industry. We are proud to have served more than 500 active clients worldwide, with offices in six strategic locations across Asia-Pacific, making us truly global.
              </p>
            </div>
          </div>
        </div>
      </section>

   

      {/* CTA Section */}
      <section className="py-16 bg-[#0a3d62] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your business goals.
          </p>
          <button className="bg-[#f47847] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Overview; 