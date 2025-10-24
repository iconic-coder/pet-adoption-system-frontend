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
        </div>
      </div>
    </nav>
  );
}

export default NavBar;