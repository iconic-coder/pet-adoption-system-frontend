import React, { useState } from 'react';
import PetCard from '../components/PetCard';

function Adopt() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const mockPets = [
    { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: '3 years', image: '🐕', type: 'dog', description: 'Friendly and energetic dog looking for an active family.' },
    { id: 2, name: 'Whiskers', breed: 'Persian Cat', age: '2 years', image: '🐱', type: 'cat', description: 'Calm and affectionate cat who loves to cuddle.' },
    { id: 3, name: 'Max', breed: 'German Shepherd', age: '4 years', image: '🐕', type: 'dog', description: 'Loyal and protective, great with children.' },
    { id: 4, name: 'Luna', breed: 'Siamese Cat', age: '1 year', image: '🐱', type: 'cat', description: 'Playful kitten with beautiful blue eyes.' },
    { id: 5, name: 'Charlie', breed: 'Labrador Mix', age: '5 years', image: '🐕', type: 'dog', description: 'Gentle giant who loves swimming and fetch.' },
    { id: 6, name: 'Mittens', breed: 'Tabby Cat', age: '3 years', image: '🐱', type: 'cat', description: 'Independent but loving, perfect for quiet homes.' }
  ];

  const filteredPets = mockPets.filter(pet => {
    const matchesType = selectedType === 'all' || pet.type === selectedType;
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center gradient-text mb-4">
            Find Your Perfect Pet
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Browse through our available pets and find your new best friend. Each pet is looking for a loving home.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedType === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Pets
              </button>
              <button
                onClick={() => setSelectedType('dog')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedType === 'dog' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🐶 Dogs
              </button>
              <button
                onClick={() => setSelectedType('cat')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedType === 'cat' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                🐱 Cats
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search pets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pet Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPets.length} pet{filteredPets.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
        {filteredPets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No pets found</h3>
            <p className="text-gray-600">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Adopt;