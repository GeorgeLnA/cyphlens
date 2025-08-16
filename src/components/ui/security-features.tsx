import React from "react";

const BlogInsights: React.FC = () => {
  const categories = [
    { name: "THE BLOG", icon: "📝", color: "from-blue-900/20 to-blue-800/10", borderColor: "border-blue-700/30" },
    { name: "INSIGHTS", icon: "💡", color: "from-purple-900/20 to-purple-800/10", borderColor: "border-purple-700/30" },
    { name: "SOFTWARE", icon: "💻", color: "from-green-900/20 to-green-800/10", borderColor: "border-green-700/30" },
    { name: "AI & IOT", icon: "🤖", color: "from-orange-900/20 to-orange-800/10", borderColor: "border-orange-700/30" },
    { name: "E-COMMERCE", icon: "🛒", color: "from-red-900/20 to-red-800/10", borderColor: "border-red-700/30" },
    { name: "QA", icon: "✅", color: "from-indigo-900/20 to-indigo-800/10", borderColor: "border-indigo-700/30" },
    { name: "ENERGY, OIL & GAS", icon: "⚡", color: "from-yellow-900/20 to-yellow-800/10", borderColor: "border-yellow-700/30" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Main heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          THE BLOG
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Discover insights across industries and technologies
        </p>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 border ${category.borderColor} hover:border-opacity-70 transition-all duration-300 hover:scale-105 backdrop-blur-sm group cursor-pointer`}
          >
            <div className="text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Discover More section */}
      <div className="text-center">
        <div className="inline-block">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogInsights;
