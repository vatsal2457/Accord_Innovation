import React from 'react';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
    <h3 className="text-white text-lg font-medium mb-4">{title}</h3>
    {children}
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <FooterColumn title="Accord Innovations">
            <p className="mb-2">People-Powered Performance</p>
            <p className="mb-2">GL: +6.03 8322 7700</p>
            <p className="mb-2">contact@accordinnovations.com</p>
          </FooterColumn>
          
          <FooterColumn title="Main Links">
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Industry</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Code of Conduct</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Value Proposition</a></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn title="Services">
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">IoT</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Software Development</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">QA Testing Services</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Mobility Solutions</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cloud Services</a></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn title="IT Solutions">
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Product Engineering</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">SaaS & Cloud</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Data Management</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Web Technologies</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">ERP & CRM</a></li>
            </ul>
          </FooterColumn>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2023 Accord Innovations | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 