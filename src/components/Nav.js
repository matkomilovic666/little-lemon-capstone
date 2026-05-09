import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsNavExpanded(false);
    navigate('/', { state: { scrollToAbout: true } });
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="Little Lemon logo" />
      </div>
      <button
        className="nav-burger"
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
        aria-expanded={isNavExpanded}
        aria-label="Toggle navigation menu"
      >
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <ul className={`nav-menu${isNavExpanded ? ' expanded' : ''}`}>
        <li><Link to="/" onClick={() => setIsNavExpanded(false)}>Home</Link></li>
        <li><a href="#about" onClick={handleAboutClick}>About</a></li>
        <li><Link to="/" onClick={() => setIsNavExpanded(false)}>Menu</Link></li>
        <li><Link to="/reservations" onClick={() => setIsNavExpanded(false)}>Reservations</Link></li>
        <li><Link to="/" onClick={() => setIsNavExpanded(false)}>Order Online</Link></li>
        <li><Link to="/" onClick={() => setIsNavExpanded(false)}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;