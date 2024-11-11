import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Ferme le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêche le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <span className="logo-icon">🔧</span>
            <span className="logo-text">Tech Info Tuto</span>
          </Link>

          <button 
            className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/distance" className="nav-link">À Distance</Link>
            <Link to="/domicile" className="nav-link">À Domicile</Link>
            <Link to="/tarifs" className="nav-link">Tarifs</Link>
            <Link to="/support" className="nav-link">Contact</Link>
            
            <div className="nav-contact">
              <a href="tel:0661388374" className="contact-button">
                <span className="phone-icon">📞</span>
                06 61 38 83 74
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
