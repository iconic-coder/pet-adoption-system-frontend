import React from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/adopt', label: 'Adopt' },
  { to: '/give-up-pet', label: 'Surrender' },
  { to: '/contact', label: 'Contact' }
];

function NavBar() {
  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(25px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        padding: '0 2rem'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <span style={{ fontSize: '2rem' }}>🐾</span>
          <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Paw Adoption</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              style={{
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {label}
            </Link>
          ))}
          <button className="btn-primary" style={{ fontSize: '14px' }}>
            Sign In
          </button>
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🐾</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Paw Adoption
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link to="/adopt" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Adopt</Link>
            <Link to="/give-up-pet" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Surrender</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            <button className="btn-primary">Sign In</button>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;