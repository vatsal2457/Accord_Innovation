import React from 'react'

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage: string;
  backgroundColor?: string;
  gradientColor?: string;
  textColor?: string;
  accentColor?: string;
}

function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = '#0a3d62',
  gradientColor = '#0a3d62',
  textColor = 'white',
  accentColor = '#f47847'
}: HeroProps) {
  return (
    <section className={`relative min-h-[60vh] bg-[${backgroundColor}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60vh] flex items-center">
        {/* Left side - Text Content */}
        <div className="w-full lg:w-1/2 pl-4 lg:pl-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 z-20" >
            {subtitle ? (
              <>
                <span className={`text-[${textColor}]`}>{title}</span>{" "}
                <span className={`text-[${accentColor}]`}>{subtitle}</span>
              </>
            ) : (
              <span className={`text-[${textColor}]`}>{title}</span>
            )}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-300 z-20">
            {description}
          </p>
        </div>
        
        {/* Right side - Image */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
          <div className={`absolute inset-0 bg-gradient-to-r from-[${gradientColor}] via-[${gradientColor}]/80 to-transparent z-10`} />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero