import React from 'react';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import { Shield, CreditCard, LineChart, Database } from 'lucide-react';

const BankingAndFinancialServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Banking & Financial"
        subtitle="Services"
        description="Transforming financial institutions with cutting-edge technology solutions that drive innovation, security, and customer satisfaction."
        backgroundImage="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        backgroundColor="#0a3d62"
        gradientColor="#0a3d62"
        textColor="white"
        accentColor="#f47847"
      />

      {/* Banking & Financial Services Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Approach Section - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#0a3d62]">Commitment to excellence</span>{" "}
                
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to excellence and innovative solutions has made us a trusted partner for financial institutions worldwide. With a profound understanding of the challenges and opportunities within the BFSI sector, we are dedicated to helping you achieve operational efficiency, regulatory compliance, and customer satisfaction, while driving your business toward sustained success.

Over the last decade, the BFSI industry has witnessed a remarkable transformation, marked by increased investments in IT. Companies in this sector are actively leveraging technology to enhance profitability, expedite the launch of new products and services, navigate regulatory changes, and meet evolving customer expectations.
                </p>
               
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Approach" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Our Solutions Section - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Our Solutions" 
                className="rounded-lg shadow-xl w-[500px] h-[350px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#f47847]">Banking & Financial </span>{" "}
                <span className="text-[#0a3d62]">Services Solutions</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We offer a comprehensive suite of technology solutions designed specifically for the banking and financial services industry. Our solutions include digital banking platforms, payment processing systems, risk management tools, and regulatory compliance frameworks.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                At Accord Innovations, we stand as a seasoned player in the IT services arena, boasting a wealth of skills, expertise, and robust infrastructure. We are uniquely positioned to offer round-the-clock proactive monitoring and management of your business communication systems, aligning perfectly with the dynamic needs of the BFSI sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & Financial Services OFFERINGS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#0a3d62]">Banking & Financial Services</span>{" "}
              <span className="text-[#f47847]">OFFERINGS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the unique challenges of the banking and financial services industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Security & Compliance */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Robust Data Security Solutions</h3>
              <p className="text-gray-600 relative z-10">In an industry where data security is paramount, we provide cutting-edge solutions to safeguard your sensitive financial data. Our comprehensive suite of security measures includes threat detection, encryption, and real-time monitoring to ensure your operations remain resilient against cyber threats.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 2: Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Efficient Risk Management Systems</h3>
              <p className="text-gray-600 relative z-10">The BFSI sector faces ever-evolving risks. Our advanced risk management systems leverage data analytics and AI to provide real-time risk assessment and mitigation strategies. Stay ahead of risks, optimize decision-making, and enhance regulatory compliance with our solutions.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 3: Risk Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <LineChart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Customer-Centric Digital Platforms</h3>
              <p className="text-gray-600 relative z-10">Enhance customer experiences with our customer-centric digital platforms. From intuitive mobile banking apps to personalized financial advisory tools, we help you create digital solutions that resonate with your clients, increasing engagement and satisfaction.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>

            {/* Card 4: Data Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-[#0a3d62] overflow-hidden relative group">
              <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#0a3d62]/5 to-[#f47847]/5 transition-all duration-500 group-hover:scale-150"></div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0a3d62]/10 to-[#f47847]/10 mb-6 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0a3d62] group-hover:text-[#f47847] transition-colors duration-300">Compliance and Regulatory Support</h3>
              <p className="text-gray-600 relative z-10">Regulatory compliance is non-negotiable in finance. We offer comprehensive solutions to automate compliance processes, ensuring that your institution remains in line with the latest regulations. Stay agile and adapt to changing compliance requirements effortlessly with Accord Innovations.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f47847] group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default BankingAndFinancialServices;
