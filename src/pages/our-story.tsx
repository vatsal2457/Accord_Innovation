import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OurStory: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const timelineData = [
    {
      year: '2011',
      title: 'Accord Inception',
      description: 'Incepted in Malaysia as a valued intermediary between companies and job seekers.',
      image: '/images/aa1.png',
      details: 'Founded with a vision to bridge the gap between talent and opportunity, Accord began its journey in Malaysia. Our initial focus was on connecting skilled professionals with forward-thinking companies.'
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Expanded into digital solutions and software development services.',
      image: '/images/digital-transformation.jpg',
      details: 'Recognizing the growing demand for digital solutions, we expanded our services to include software development, digital transformation consulting, and technology implementation services.'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Established presence in multiple countries across Asia-Pacific region.',
      image: '/images/global-expansion.jpg',
      details: 'With a strong foundation in Malaysia, we expanded our operations to Singapore, Indonesia, Thailand, and Vietnam, establishing a robust presence across the Asia-Pacific region.'
    },
    {
      year: '2021',
      title: 'Innovation Hub',
      description: 'Launched our innovation hub to drive technological advancement and research.',
      image: '/images/innovation-hub.jpg',
      details: 'Our innovation hub was established to focus on emerging technologies like AI, blockchain, and IoT, positioning us at the forefront of technological advancement in the region.'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as a leading technology solutions provider with over 1000 professionals.',
      image: '/images/industry-leadership.jpg',
      details: 'Today, Accord stands as a leading technology solutions provider with a team of over 1000 professionals, serving clients across diverse industries and geographies.'
    }
  ];

  const handleItemClick = (index: number) => {
    if (activeItem === index) {
      setActiveItem(null);
      setShowDetails(false);
    } else {
      setActiveItem(index);
      setShowDetails(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#0a3d62]">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 w-3/5 h-full">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-[#0a3d62]/90"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0a3d62]/20"
            ></motion.div>

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-20' : 'pl-20'}`}>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className={`bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                      activeItem === index ? 'ring-2 ring-[#f47847] scale-105' : ''
                    }`}
                    onClick={() => handleItemClick(index)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl font-bold text-[#f47847] mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-[#0a3d62] mb-4">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                    
                    {/* Expand/Collapse Indicator */}
                    <div className="mt-4 flex items-center text-[#f47847] text-sm font-medium">
                      <span>{activeItem === index ? 'Show Less' : 'Show More'}</span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ml-1 ${activeItem === index ? 'rotate-180' : ''}`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ rotate: activeItem === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>
                  </motion.div>
                  
                  {/* Expanded Details */}
                  <AnimatePresence>
                    {activeItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 bg-white rounded-lg shadow-lg p-6 overflow-hidden"
                      >
                        <p className="text-gray-700">{item.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                    activeItem === index ? 'bg-[#f47847] scale-125' : 'bg-[#f47847]'
                  }`}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => handleItemClick(index)}
                />

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className={`w-1/2 ${index % 2 === 0 ? 'pl-20' : 'pr-20'}`}
                >
                  <motion.div 
                    className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleItemClick(index)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="text-white font-bold text-xl"
                      >
                        Click to Learn More
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory; 