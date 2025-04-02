import React, { useState, useEffect } from 'react';
import { ChevronRight, X, ChevronDown } from 'lucide-react';

interface MenuItem {
  items: string[];
  description: string;
  cta: string;
  features: string[];
}

interface MenuData {
  [key: string]: {
    [key: string]: MenuItem;
  };
}

interface MegaMenuProps {
  onClose: () => void;
  activeSection?: string;
}

const menuData: MenuData = {
  Products: {
    'Featured products': {
      items: [
       'Overview',
        'Vision & Mission',
        'Our Story',
        'Executive Leadership Team',
        'Our clientele',
        'Code of Conduct',
        'Value Proposition',
        'Sustainability',
        'Anti Bribery & Anti-Corruption Policy',
        'PDPA',
      ],
      description: 'Unite people, processes, and systems with AI-powered products for all your workflows.',
      cta: 'See All Products',
      features: [
        'Put AI to work with the Now Platform',
        'Connect and automate workflows',
        'Single AI platform for business transformation',
        'Drive productivity and ROI'
      ]
    },
    'AI at ServiceNow': {
      items: [
        'Now Platform',
        'AI Agents',
        'Process Optimization',
        'Workflow Builder',
        'AI & Machine Learning',
        'Mobile Solutions',
        'Analytics & Reporting'
      ],
      description: 'Take action with autonomous AI agents that work for you.',
      cta: 'Explore Platform',
      features: [
        'Productivity and efficiency',
        'Customer and employee experience',
        'Security and compliance',
        'Advanced automation capabilities'
      ]
    }
  },
  Industries: {
    'Featured Industries': {
      items: [
        'Banking & Financial Services',
        'Insurance',
        'Telecommunications',
        'Software',
        'Healthcare',
        'Aerospace & Aviation',
        'Manufacturing',
        'Retail',
        'Consumer Electronics Sector',
        'Energy',
        'Travel & Logistics',
        'Life Sciences',
        'Medical Devices',
        'Pharmaceutical',
        'Automotive'
      ],
      description: 'Industry-specific solutions to transform your business operations.',
      cta: 'Explore Industries',
      features: [
        'Tailored workflows',
        'Industry best practices',
        'Compliance ready',
        'Rapid time to value'
      ]
    }
  },
  Learning: {
    'Resources': {
      items: [
        'Now Learning',
        'Certification Programs',
        'Developer Portal',
        'Community',
        'Documentation',
        'Training Courses',
        'Best Practices',
        'Success Stories'
      ],
      description: 'Comprehensive learning resources to help you succeed.',
      cta: 'Start Learning',
      features: [
        'Self-paced courses',
        'Hands-on labs',
        'Expert-led training',
        'Certification paths'
      ]
    }
  },
  Support: {
    'Support Options': {
      items: [
        'IoT',
        'Software Development Services',
        'QA Testing Services',
        'Mobility Solutions',
        'Data Analytics & Business Intellige',
        'Professional & Managed Services',
        'Cloud Services',
        'Infrastructure Management Services',
        'Artificial Intelligence'
      ],
      description: 'Get the help you need to succeed with our platform.',
      cta: 'Get Support',
      features: [
        '24/7 technical support',
        'Dedicated success managers',
        'Expert consultants',
        'Global support coverage'
      ]
    }
  },
  Solutions: {
    'Our Solutions': {
      items: [
        'Product Engineering',
        'SaaS & Cloud',
        'Data Management',
        'Web Technologies',
        'ERP & CRM',
        'AI – Chat Bot'
      ],
      description: 'Comprehensive solutions to transform your business operations.',
      cta: 'Explore Solutions',
      features: [
        'Cutting-edge technology',
        'Scalable solutions',
        'Industry expertise',
        'Proven track record'
      ]
    }
  },
  Partners: {
    'Partner Programs': {
      items: [
        'Partner Portal',
        'Technology Partners',
        'Service Partners',
        'Sales Partners',
        'Partner Directory',
        'Partner Training',
        'Partner Resources',
        'Success Stories'
      ],
      description: 'Join our partner ecosystem and grow your business.',
      cta: 'Become a Partner',
      features: [
        'Partner benefits',
        'Sales enablement',
        'Technical resources',
        'Marketing support'
      ]
    }
  },
  About: {
    'About Us': {
      items: [
        'Overview',
        'Vision & Mission',
        'Our Story',
        'Executive Leadership Team',
        'Our clientele',
        'Code of Conduct',
        'Value Proposition',
        'Sustainability',
        'Anti Bribery & Anti-Corruption Policy',
        'PDPA'
      ],
      description: 'Learn about our company, values, and commitment to excellence.',
      cta: 'Learn More',
      features: [
        'Global presence',
        'Industry leadership',
        'Innovation culture',
        'Social impact'
      ]
    }
  },
  Services: {
    'Our Services': {
      items: [
        'IoT',
        'Software Development Services',
        'QA Testing Services',
        'Mobility Solutions',
        'Data Analytics & Business Intellige',
        'Professional & Managed Services',
        'Cloud Services',
        'Infrastructure Management Services',
        'Artificial Intelligence'
      ],
      description: 'Comprehensive services to transform your business operations.',
      cta: 'Explore Services',
      features: [
        'Expert team',
        'Quality assurance',
        'Innovation focus',
        'Scalable solutions'
      ]
    }
  },
  Knowledge: {
    'Resources': {
      items: [
        'Blog',
        'Case Studies',
        'Whitepapers',
        'Webinars',
        'eBooks',
        'Podcasts',
        'Research',
        'ROI Calculator'
      ],
      description: 'Discover insights and resources to drive digital transformation.',
      cta: 'Explore Resources',
      features: [
        'Industry insights',
        'Success stories',
        'Best practices',
        'Thought leadership'
      ]
    }
  }
};

const MegaMenu: React.FC<MegaMenuProps> = ({ onClose, activeSection = 'Products' }) => {
  const currentSection = menuData[activeSection] || menuData.Products;
  const categories = Object.keys(currentSection);

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] || '');
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);

  // Update selected category when section changes
  useEffect(() => {
    const firstCategory = Object.keys(currentSection)[0] || '';
    setSelectedCategory(firstCategory);
    setExpandedMobileCategory(null);
  }, [activeSection, currentSection]);

  // Toggle mobile category expansion
  const toggleMobileCategory = (category: string) => {
    setExpandedMobileCategory(expandedMobileCategory === category ? null : category);
  };

  // Ensure we have a valid category and data
  const selectedCategoryData = currentSection[selectedCategory];
  if (!selectedCategoryData) {
    return null;
  }

  return (
    <div className="w-full bg-[#0a3d62] shadow-2xl shadow-black/50 border-t border-gray-700 max-h-[85vh] md:max-h-[80vh] overflow-y-auto relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#f47847] transition-colors duration-200 z-50"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Mobile View */}
        <div className="md:hidden">
          <h3 className="text-xl text-white font-semibold mb-4">{activeSection}</h3>
          <p className="text-gray-300 mb-4 text-sm">
            {currentSection[selectedCategory].description}
          </p>
          
          {/* Mobile Categories Accordion */}
          <div className="mt-4 border-t border-gray-700 pt-4">
            {categories.map((category) => (
              <div key={category} className="mb-2 border-b border-gray-700 pb-2">
                <button
                  onClick={() => toggleMobileCategory(category)}
                  className="w-full flex justify-between items-center p-2 text-left"
                >
                  <span className={`font-medium ${expandedMobileCategory === category ? 'text-[#f47847]' : 'text-white'}`}>
                    {category}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      expandedMobileCategory === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedMobileCategory === category && (
                  <div className="pl-2 pt-2 pb-1">
                    <div className="grid grid-cols-1 gap-y-2">
                      {currentSection[category].items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-gray-300 hover:text-[#f47847] py-1 px-2 text-sm"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                    
                    <div className="mt-4 mb-2">
                      <a 
                        href="#"
                        className="text-[#f47847] font-medium inline-flex items-center text-sm"
                      >
                        {currentSection[category].cta}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Features */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <h4 className="text-white font-semibold mb-4 text-base">Key Features</h4>
            <div className="space-y-3">
              {selectedCategoryData.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 bg-[#f47847] rounded-full flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <p className="text-gray-300 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Products header and categories */}
            <div className="w-full md:w-1/3 xl:w-1/4 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0">
              <h3 className="text-xl text-white font-semibold mb-4">{activeSection}</h3>
              <p className="text-gray-300 mb-4">
                {currentSection[selectedCategory].description}
              </p>
              <a 
                href="#"
                className="text-[#f47847] font-medium hover:underline inline-flex items-center mb-6"
              >
                {currentSection[selectedCategory].cta}
                <ChevronRight className="h-5 w-5 ml-1" />
              </a>
              
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  FEATURED PRODUCTS
                </h4>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left py-2 transition-colors duration-200 text-base 
                          ${selectedCategory === category 
                            ? 'text-[#f47847] font-semibold' 
                            : 'text-white hover:text-[#f47847]'}`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Items Grid */}
            <div className="w-full md:w-2/3 xl:w-3/4 pl-0 md:pl-8 pt-6 md:pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {selectedCategoryData.items.map((item) => (
                  <a
                    key={item}
                    href="/overview"
                    className="block group text-gray-200 hover:text-[#f47847] transition-colors duration-200"
                  >
                    <div className="font-medium">{item}</div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300">
                      Transform service management
                    </div>
                  </a>
                ))}
              </div>

              {/* Bottom Features Section */}
              <div className="mt-12 border-t border-gray-700 pt-8">
                <h4 className="text-white font-semibold mb-6">
                  Put AI to work with the Now Platform
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedCategoryData.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 mt-1 bg-[#f47847] rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;