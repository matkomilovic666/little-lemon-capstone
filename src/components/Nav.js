import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  {anchor: '/', name: 'Home'},
  {anchor: '', name: 'About'},
  {anchor: '', name: 'Menu'},
  {anchor: '', name: 'Reservations'},
  {anchor: '', name: 'Order Online'},
  {anchor: '', name: 'Login'},
];


const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
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
        <MenuIcon style={{ fontSize: 32, color: '#222' }} />
      </button>
      <ul className={`nav-menu${isNavExpanded ? ' expanded' : ''}`}>
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link to={navLink.anchor} onClick={() => setIsNavExpanded(false)}>
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;