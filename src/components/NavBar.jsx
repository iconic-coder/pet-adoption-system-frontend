import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🐾</span>
        <span className="text-xl font-semibold text-gray-800">Paw Adoption</span>
      </div>
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/adopt" className="text-gray-700 hover:text-blue-600">Adopt</Link>
        <Link to="/give-up-pet" className="text-gray-700 hover:text-blue-600">Give Up a Pet</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Log In</button>
      </div>
    </nav>
  );
}

export default NavBar;