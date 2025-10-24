import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/adopt', label: 'Adopt', icon: '🐾' },
  { path: '/give-up-pet', label: 'Surrender', icon: '📝' },
  { path: '/contact', label: 'Contact', icon: '📞' }
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3" aria-label="home">
            <span className="text-3xl">🐾</span>
            <span className="text-2xl font-bold gradient-text">Paw Adoption</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isActiveLink(path) ? 'bg-purple-100 text-purple-700' : 'hover:bg-gray-50'}`}
                aria-current={isActiveLink(path) ? 'page' : undefined}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Sign In</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen}>
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            {NAV_LINKS.map(({ path, label, icon }) => (
              <Link key={path} to={path} className={`block px-4 py-2 rounded-lg ${isActiveLink(path) ? 'bg-purple-100 text-purple-700' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                <span className="mr-2">{icon}</span>
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;