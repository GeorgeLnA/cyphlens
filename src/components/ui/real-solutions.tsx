import React from "react";

const RealSolutions: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: '#17030A' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Real Solutions for
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Real Problems
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-20">
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Cyphlens delivers practical, effective security solutions that address the real challenges facing modern organizations.
          </p>
        </div>

        {/* Call to Action */}
        <div className="inline-block">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealSolutions;
