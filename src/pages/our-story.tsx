import React from 'react';
import { motion } from 'framer-motion';

const OurStory: React.FC = () => {
  const timelineData = [
    {
      year: '2011',
      title: 'Accord Inception',
      description: 'Incepted in Malaysia as a valued intermediary between companies and job seekers.',
      image: '/images/aa1.png'
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Expanded into digital solutions and software development services.',
      image: '/images/digital-transformation.jpg'
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Established presence in multiple countries across Asia-Pacific region.',
      image: '/images/global-expansion.jpg'
    },
    {
      year: '2021',
      title: 'Innovation Hub',
      description: 'Launched our innovation hub to drive technological advancement and research.',
      image: '/images/innovation-hub.jpg'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as a leading technology solutions provider with over 1000 professionals.',
      image: '/images/industry-leadership.jpg'
    }
  ];

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
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0a3d62]/20"></div>

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
                    className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="text-4xl font-bold text-[#f47847] mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-[#0a3d62] mb-4">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#f47847] rounded-full border-4 border-white shadow-lg"
                />

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  className={`w-1/2 ${index % 2 === 0 ? 'pl-20' : 'pr-20'}`}
                >
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
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