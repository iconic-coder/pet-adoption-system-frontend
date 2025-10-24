import React from 'react';

function PetDetails() {
  return (
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6 ">
      {filterPets.length > 0 ? filterPets.map((pet) => (
        <div key={pet.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
          <img src={pet.image} alt={pet.name} className="h-40 object-cover rounded mb-4" />
          <h2 className="text-xl font-semi-bold">{pet.name}</h2>
          <p className="text-gray-500 text-sm mb-2">{pet.description}</p>
          <button className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800 transition">
            Adopt Me
          </button>

        </div>
      )): (<p>No match Found</p>)}
    </div>
  );
}

export default PetDetails;