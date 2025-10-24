import React, { useState } from 'react';

function PetCard({ pet }) {
  const [imageError, setImageError] = useState(false);
  
  if (!pet) {
    return null;
  }
  
  const { name, breed, age, image, description, type } = pet;
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div className="card group cursor-pointer" style={{ display: 'flex', flexDirection: 'row', maxWidth: '600px', height: '200px' }}>
      <div className="relative overflow-hidden" style={{ width: '200px', flexShrink: 0 }}>
        {!imageError ? (
          <img 
            src={image || '/api/placeholder/200/200'} 
            alt={name || 'Pet'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="group-hover:scale-110 transition-transform duration-300"
            onError={handleImageError}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '3rem' }}>{type === 'dog' ? '🐶' : type === 'cat' ? '🐱' : '🐹'}</span>
          </div>
        )}
  const { name, breed, age, image, description, type } = pet || {};
  
  return (
    <div className="card group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image || '/api/placeholder/300/250'} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            {type === 'dog' ? '🐶' : type === 'cat' ? '🐱' : '🐹'} {breed}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', margin: 0 }}>{name || 'Buddy'}</h3>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '500' }}>
              {age || '2'} years
            </span>
          </div>
          <p style={{ color: '#6b7280', marginBottom: '0.75rem', fontSize: '0.9rem' }}>{breed || 'Mixed Breed'}</p>
          <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.85rem' }} className="line-clamp-2">
            {description || 'A loving and playful companion looking for a forever home.'}
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn-primary" style={{ flex: 1, fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
            Adopt Me
          </button>
          <button style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', backgroundColor: 'transparent', cursor: 'pointer' }} className="hover:bg-gray-50 transition-colors">
            <svg style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{name || 'Buddy'}</h3>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
            {age || '2'} years
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description || 'A loving and playful companion looking for a forever home.'}
        </p>
        
        <div className="flex gap-3">
          <button className="flex-1 btn-primary py-2 text-sm">
            Adopt Me
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetCard;