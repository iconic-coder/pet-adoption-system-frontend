import React from 'react';

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Find Your New Best Friend</h1>
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, breed, or age"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
            🐶 Dogs
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
            🐱 Cats
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
            🐹 Other
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;