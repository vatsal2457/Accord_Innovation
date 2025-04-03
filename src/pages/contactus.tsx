import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactUs: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    mailingList: false
  });

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.parentElement?.classList.add('transform', 'scale-[1.02]');
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.parentElement?.classList.remove('transform', 'scale-[1.02]');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-[400px] bg-[#0a3d62] overflow-hidden"
      >
        {/* Background Image - Right Side */}
        <div className="absolute right-0 w-3/5 h-full">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146923-c433d7b6b3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a3d62] via-[#0a3d62]/80 to-transparent"></div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-20 w-32 h-32 bg-[#f47847]/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-20 -right-20 w-32 h-32 bg-[#f47847]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full max-w-2xl"
          >
            <div className="space-y-3">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                <span className="inline-block px-4 py-1.5 bg-[#f47847]/10 text-[#f47847] rounded-full text-sm font-medium backdrop-blur-sm">
                  Get in Touch
                </span>
              </motion.div>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Contact Us
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed"
              >
                Have questions or need assistance? Our team is here to help you with any inquiries or support you may need.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center space-x-4 pt-2"
              >
                <div className="flex items-center space-x-2 hover:text-[#f47847] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#f47847]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white text-sm md:text-base hover:text-[#f47847] transition-colors duration-300">+6.03 8322 7700</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-[#f47847] transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#f47847]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-sm md:text-base hover:text-[#f47847] transition-colors duration-300">contact@accordinnovations.com</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <motion.p 
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-700 group"
                    >
                      <span className="font-semibold mr-2">Phone:</span>
                      <a href="tel:+6.03 8322 7700" className="group-hover:text-[#f47847] transition-colors duration-300">+6.03 8322 7700</a>
                    </motion.p>
                    <motion.p 
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-700 group"
                    >
                      <span className="font-semibold mr-2">Email:</span>
                      <a href="mailto:contact@accordinnovations.com" className="group-hover:text-[#f47847] transition-colors duration-300">contact@accordinnovations.com</a>
                    </motion.p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Office Location</h2>
                  <motion.address 
                    whileHover={{ x: 5 }}
                    className="not-italic text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    Level 13A-02, Vertical Business Suite II,<br />
                    Bangsar South City,<br />
                    No. 8, Jalan Kerinchi,<br />
                    59200 Kuala Lumpur, Malaysia
                  </motion.address>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Ask us anything</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-[#f47847] focus:bg-white focus:ring-0 transition-all duration-300"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  ></textarea>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    id="mailing-list"
                    className="rounded border-gray-300 text-[#f47847] focus:ring-[#f47847] transition-colors duration-300"
                  />
                  <label htmlFor="mailing-list" className="ml-2 text-gray-700">
                    Add me to your mailing list
                  </label>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 text-center text-white font-medium bg-[#0a3d62] rounded-lg hover:bg-[#0a3d62]/90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;
