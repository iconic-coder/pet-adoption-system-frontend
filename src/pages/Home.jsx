import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="text-6xl font-bold gradient-text mb-6">
            Find Your Perfect Companion
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with loving pets waiting for their forever homes. Every adoption saves a life.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Link to="/adopt" className="btn-primary">
              🐾 Start Adopting
            </Link>
            <Link to="/give-up-pet" className="btn-secondary">
              💝 Surrender Pet
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(15px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Search Available Pets</h2>
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, breed, or age"
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute left-3 top-3 text-gray-400">🔍</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center px-6 py-3 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
                🐶 Dogs
              </button>
              <button className="flex items-center px-6 py-3 bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors">
                🐱 Cats
              </button>
              <button className="flex items-center px-6 py-3 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors">
                🐹 Other Pets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(15px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Pets</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((pet) => (
              <div key={pet} className="card">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-6xl">🐕</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Buddy</h3>
                  <p className="text-gray-600 mb-4">Golden Retriever • 3 years old</p>
                  <p className="text-sm text-gray-500 mb-4">Friendly and energetic dog looking for an active family.</p>
                  <Link to="/adopt" className="btn-primary w-full text-center block">
                    Meet Buddy
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(15px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Pets Adopted</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Shelters</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;