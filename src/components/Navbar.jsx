import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

import logo from '../assets/logo.png';          // adjust path if needed
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState('login');

  /* NEW – logo viewer toggle */
  const [showLogo, setShowLogo] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAuthClick = (type) => {
    setAuthType(type);
    setShowAuthModal(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ───────────────── Navbar ───────────────── */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Brand / Logo + Text  (click shows full logo) */}
          <Link
            to="#"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();      // stay on page
              setShowLogo(true);
            }}
          >
            <img src={logo} alt="VaidikaKarma logo" className="navbar-logo-img" />
            <span className="navbar-logo-text">Vaidika_Karma</span>
          </Link>

          {/* Mobile menu toggle */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Navigation links */}
          <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Purohits" className="nav-links" onClick={toggleMenu}>
                Purohits
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book-pooja" className="nav-links" onClick={toggleMenu}>
                Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonials" className="nav-links" onClick={toggleMenu}>
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={toggleMenu}>
                Contact
              </Link>
            </li>

            {/* Mobile auth buttons */}
            <li className="nav-item mobile-auth">
              <button className="nav-btn" onClick={() => handleAuthClick('login')}>
                Login
              </button>
            </li>
            <li className="nav-item mobile-auth">
              <button
                className="nav-btn primary"
                onClick={() => handleAuthClick('register')}
              >
                Register
              </button>
            </li>
          </ul>
        </div>

        {/* Auth modal */}
        <AuthModal
          show={showAuthModal}
          handleClose={() => setShowAuthModal(false)}
          authType={authType}
          setAuthType={setAuthType}
        />
      </nav>

      {/* ───────────────── Logo overlay ───────────────── */}
      {showLogo && (
        <div className="logo-backdrop" onClick={() => setShowLogo(false)}>
          <div className="logo-box" onClick={(e) => e.stopPropagation()}>
            <button className="logo-close" onClick={() => setShowLogo(false)}>
              &times;
            </button>
            <img src={logo} alt="Full‑size logo" className="logo-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
