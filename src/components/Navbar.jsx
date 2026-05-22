import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';

export default function Navbar({ currentPage, onNavigate, onOpenJoinModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'histoire', label: 'Notre Histoire' },
    { id: 'activites', label: 'Nos Activités' },
    { id: 'programme', label: 'Programme & Agora' },
    { id: 'don', label: 'Faire un Don' },
  ];

  return (
    <header>
      <div className="nav-container">
        <a href="#/accueil" className="logo-link" onClick={() => handleNavClick('accueil')}>
          <img src={logoImg} alt="MJCS Logo" className="logo-img" />
          <div className="logo-text">
            MJCS<span>.</span>
          </div>
        </a>

        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu de navigation"
        >
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#/${item.id}`}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <button 
              className="btn btn-primary" 
              onClick={() => {
                onOpenJoinModal();
                setIsOpen(false);
              }}
              style={{ padding: '10px 20px', fontSize: '14px', borderRadius: 'var(--border-radius-sm)', gap: '8px' }}
            >
              <i className="fas fa-user-plus" style={{ fontSize: '12px' }}></i> Rejoindre
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
