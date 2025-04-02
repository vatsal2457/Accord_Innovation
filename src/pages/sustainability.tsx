import React, { useState } from 'react';

const Sustainability: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    ethical: false,
    operations: false,
    partnership: false,
    community: false,
    employee: false,
    progress: false,
  });

  const toggleCard = (card: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  const renderToggleButton = (card: string) => (
    <button
      onClick={() => toggleCard(card)}
      className="w-10 h-10 rounded-full bg-white text-center bg-opacity-20 hover:bg-opacity-30 
                flex items-center justify-center transition-all duration-300 
                transform hover:scale-110 focus:outline-none focus:ring-2 
                focus:ring-white focus:ring-opacity-50 backdrop-blur-sm"
      aria-label={`Toggle ${card} content`}
    >
      <span className="text-2xl font-light text-black transition-transform duration-300"
            style={{ transform: expandedCards[card] ? 'rotate(0deg)' : 'rotate(90deg)' }}>
        {expandedCards[card] ? '−' : '+'}
      </span>
    </button>
  );

  return (
    <div className='w-full'>

      <div className="relative h-96 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white text-center">
            Sustainability
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-20 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Sustainable Progress"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Journey of Sustainable Progress</h1>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                At Accord Innovations, our overarching objective is to seamlessly blend technological excellence with a conscientious commitment to sustainability. We firmly believe that every action, no matter how small, has the potential to create profound and lasting impact. Sustainability isn't a mere buzzword in our ethos, it's a pledge that guides our daily operations.
              </p>
              <p>
                In our day-to-day functioning, we hold ourselves accountable to a higher standard. From embracing energy-efficient office practices to cultivating purposeful partnerships, every decision we make is underpinned by a genuine concern for the environment and society at large. We recognize that our choices today shape the world of tomorrow, and it's a responsibility we wholeheartedly embrace.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-full mx-auto px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Ethical Responsibility */}
          <div className="relative">
            <div className="relative bg-gray-100 shadow-md h-40 rounded-xl overflow-hidden group mb-4">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              >
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div> */}
              </div>
              <div className="relative h-full  flex flex-wrap items-center justify-between p-6">
                <h3 className="text-2xl font-bold text-black text-center mb-6">Ethical Responsibility</h3>
                {renderToggleButton('ethical')}
              </div>
            </div>
            {expandedCards.ethical && (
              <div className="bg-white rounded-xl w-[100%] flex flex-col gap-7 p-8 shadow-lg transform transition-all duration-300 ease-in-out">
                <img src="https://images.unsplash.com/photo-1453847668862-487637052f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" alt="image" />
                <p className="text-gray-700  leading-relaxed tracking-wide">
                  We care deeply about sustainability because it aligns with our ethical responsibility. We believe that as a responsible corporate citizen, it's our duty to minimize our environmental impact. Sustainability remains an integral part of our moral compass.
                </p>
              </div>
            )}
          </div>

          {/* Card 2 - Responsible Operations */}
          <div className="relative">
            <div className="relative bg-gray-100 shadow-md h-40 rounded-xl overflow-hidden group mb-4">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              >
              </div>
              <div className="relative h-full flex flex-wrap items-center justify-between p-6">
                <h3 className="text-2xl font-bold text-black text-center mb-6">Responsible Operations</h3>
                {renderToggleButton('operations')}
              </div>
            </div>
            {expandedCards.operations && (
              <div className="bg-white rounded-xl flex flex-col gap-7 p-8 shadow-lg transform transition-all duration-300 ease-in-out">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="" />
                <p className="text-gray-700 leading-relaxed tracking-wide">
                  Our operations are designed with sustainability at their core. From energy-efficient facilities to waste reduction initiatives, we continuously optimize our processes to minimize environmental impact while maximizing operational efficiency.
                </p>
              </div>
            )}
          </div>

          {/* Card 3 - Ethical Partnership */}
          <div className="relative">
            <div className="relative h-40 rounded-xl shadow-md bg-gray-100 overflow-hidden group mb-4">
              
              <div className="relative h-full flex flex-wrap items-center justify-between p-6">
                <h3 className="text-2xl font-bold text-black text-center mb-6">Ethical Partnership</h3>
                {renderToggleButton('partnership')}
              </div>
            </div>
            {expandedCards.partnership && (
              <div className="bg-white rounded-xl flex flex-col gap-7 p-8 shadow-lg transform transition-all duration-300 ease-in-out">
                <img className='h-[300px]' src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="img" />
                <p className="text-gray-700 leading-relaxed tracking-wide">
                  We carefully select partners who share our commitment to sustainability and ethical business practices. Together, we create value while upholding the highest standards of environmental and social responsibility.
                </p>
              </div>
            )}
          </div>

          {/* Card 4 - Community Engagement */}
          <div className="relative">
            <div className="relative h-40 shadow-md bg-gray-100 rounded-xl overflow-hidden group mb-4">
              
              <div className="relative h-full flex flex-wrap items-center justify-between p-6">
                
                <h3 className="text-2xl font-bold text-black text-center mb-6">Community Engagement</h3>
                {renderToggleButton('community')}
              </div>
            </div>
            {expandedCards.community && (
              <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-7 transform transition-all duration-300 ease-in-out">
                <img className='h-[300px]' src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="img" />
                <p className="text-gray-700 leading-relaxed tracking-wide">
                  Our commitment to community engagement goes beyond business. We actively participate in local initiatives, support sustainable development projects, and work closely with communities to create positive, lasting impact.
                </p>
              </div>
            )}
          </div>

          {/* Card 5 - Employee Well-being */}
          <div className="relative">
            <div className="relative h-40 shadow-md bg-gray-100 rounded-xl overflow-hidden group mb-4">
             
              <div className="relative h-full flex flex-wrap items-center justify-between p-6">
                <h3 className="text-2xl font-bold text-black text-center mb-6">Employee Well-being</h3>
                {renderToggleButton('employee')}
              </div>
            </div>
            {expandedCards.employee && (
             <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col gap-7 transform transition-all duration-300 ease-in-out">
                <img className='h-[300px]' src= "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="img" />
                <p className="text-gray-700 leading-relaxed tracking-wide">
                  Our employees are our greatest asset. We foster a culture of well-being, providing a healthy work environment, promoting work-life balance, and encouraging sustainable practices in daily operations.
                </p>
              </div>
            )}
          </div>

          {/* Card 6 - Continuous Progress */}
          <div className="relative">
            <div className="relative h-40 bg-gray-100 shadow-md rounded-xl overflow-hidden group mb-4">
              <div className="relative h-full flex flex-wrap items-center justify-between p-6">
                <h3 className="text-2xl font-bold flex text-black text-center mb-6">Continuous Progress</h3>
                {renderToggleButton('progress')}
              </div>
            </div>
            {expandedCards.progress && (
              <div className="bg-white flex flex-col gap-7 rounded-xl p-8 shadow-lg transform transition-all duration-300 ease-in-out">
                <img className='h-[300px]' src= "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="img" />
            
                <p className="text-gray-700  leading-relaxed tracking-wide">
                  We believe in continuous improvement. Through regular assessment of our sustainability initiatives, adoption of new technologies, and implementation of innovative solutions, we strive to set higher standards for environmental stewardship.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability; 