import React from 'react';

const OurStory: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Story</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-700 mb-6">
            {/* Company history and journey content will be added here */}
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Timeline of important events will be added here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStory; 