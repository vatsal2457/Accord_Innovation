import React from 'react';

const ExecutiveLeadershipTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-[#0a3d62]">
        <div className="container mx-auto px-4 h-[60vh] flex items-center">
          {/* Left side - Text Content */}
          <div className="w-full lg:w-1/2 pl-20 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Executive</span>{" "}
              <span className="text-[#f47847]">Leadership Team</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Meet the visionary leaders driving innovation and excellence at Accord Innovations.
            </p>
          </div>
          
          {/* Right side - Image */}
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d62] via-[#0a3d62]/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Leadership Team Content */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a3d62] mb-16">
          MEET OUR TEAM
        </h2>

        {/* Team Members Grid */}
        <div className="space-y-20">
          {/* Member 1 - Group CEO & Founder */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Krishna Chaitanya Sunkara"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Krishna Chaitanya Sunkara</h3>
      <span className="text-xl text-gray-600">Group CEO & Founder</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 2 - CEO */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Suchitra Sunkara"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Suchitra Sunkara</h3>
      <span className="text-xl text-gray-600">Chief Executive Officer</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 3 - Operations Director */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Swathi Mula"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Swathi Mula</h3>
      <span className="text-xl text-gray-600">Operations Director</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 4 - Group COO */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Alisha Siddiqa Binti Sanmugam"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Alisha Siddiqa Binti Sanmugam</h3>
      <span className="text-xl text-gray-600">Group COO</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 5 - Group CTO */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Rohith Krupal"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Rohith Krupal</h3>
      <span className="text-xl text-gray-600">Group CTO / Country Head - Malaysia</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 6 - Group CFO */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Ambika Ayeappan"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Ambika Ayeappan</h3>
      <span className="text-xl text-gray-600">Group CFO</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 7 - CEO & Director Indonesia */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Kumar Nityanand"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Kumar Nityanand</h3>
      <span className="text-xl text-gray-600">CEO & Director - Indonesia</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 8 - Country Head Thailand */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Abhishek Gupta"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Abhishek Gupta</h3>
      <span className="text-xl text-gray-600">Country Head - Thailand</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 9 - Group VP HR & Operations */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Deepika Parashar"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Deepika Parashar</h3>
      <span className="text-xl text-gray-600">Group Vice President - HR & OPERATIONS</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 10 - Group VP Talent Acquisition */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Rupal Pandey"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Rupal Pandey</h3>
      <span className="text-xl text-gray-600">Group Vice President - Talent Acquisition & Delivery</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 11 - VP HR & Operations */}
<div className="flex flex-col md:flex-row items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Kirti Sharma"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Kirti Sharma</h3>
      <span className="text-xl text-gray-600">Vice President - HR & OPERATIONS</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
  </div>
</div>

{/* Member 12 - Operations Manager */}
<div className="flex flex-col md:flex-row-reverse items-center gap-8">
  <div className="w-full md:w-1/3">
    <img 
      src="path_to_image"
      alt="Santhosh Kumar Pamula"
      className="w-full h-[400px] object-cover object-center rounded-lg shadow-lg"
    />
  </div>
  <div className="w-full md:w-2/3 space-y-4">
    <div className="flex items-center gap-4">
      <h3 className="text-3xl text-[#5B7AB3] font-semibold">Santhosh Kumar Pamula</h3>
      <span className="text-xl text-gray-600">Operations Manager</span>
    </div>
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-[#5B7AB3] rounded flex items-center justify-center">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
    </div>
  </div>
</div>





         
        </div>
      </section>
    </div>
  );
};

export default ExecutiveLeadershipTeam; 