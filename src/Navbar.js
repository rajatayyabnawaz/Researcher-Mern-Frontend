import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ll from './mmm.PNG'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 700);
    if (window.innerWidth > 700) {
      setIsOpen(false); 
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={ll} alt="Logo"  className="logo-img" />
        
      </div>
      <div className={`links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><NavLink to="/" className="nav-link" onClick={handleLinkClick}>Home</NavLink></li>
          <li><NavLink to="/upload" className="nav-link" onClick={handleLinkClick}>Upload</NavLink></li>
          <li><NavLink to="/display" className="nav-link" onClick={handleLinkClick}>Submission</NavLink></li>
        
         
        </ul>
      </div>
      {isMobile && (
        <div className={`toggle-button ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          &#9776;
        </div>
      )}
    </nav>
  );
};

export default Navbar;
