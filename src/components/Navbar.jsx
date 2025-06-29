import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState('login');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthClick = (type) => {
    setAuthType(type);
    setShowAuthModal(true);
    setIsMenuOpen(false); // Close menu after click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          VedicPurohit
        </Link>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? 'Menu' : 'Menu'}
        </button>

        {/* Navigation Menu */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={toggleMenu}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/purohits" className="nav-links" onClick={toggleMenu}>Purohits</Link>
          </li>
          <li className="nav-item">
            <Link to="/book-pooja" className="nav-links" onClick={toggleMenu}>Book Pooja</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-links" onClick={toggleMenu}>Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>Contact</Link>
          </li>

          {/* Mobile Auth Buttons */}
          <li className="nav-item mobile-auth">
            <button className="nav-btn" onClick={() => handleAuthClick('login')}>Login</button>
          </li>
          <li className="nav-item mobile-auth">
            <button className="nav-btn primary" onClick={() => handleAuthClick('register')}>Register</button>
          </li>
        </ul>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        show={showAuthModal} 
        handleClose={() => setShowAuthModal(false)} 
        authType={authType}
        setAuthType={setAuthType}
      />
    </nav>
  );
};

export default Navbar;
