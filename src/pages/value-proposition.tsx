import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Value Proposition</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Value</h2>
          <p className="text-gray-700">
            {/* Value proposition content will be added here */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition; 