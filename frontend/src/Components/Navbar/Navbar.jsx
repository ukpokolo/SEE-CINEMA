import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import navlogo from '../Assets/logo.png';

function Navbar() {
  const location = useLocation();

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={navlogo} alt="" />
        <p className='nav-logoText'>SEE CINEMA</p>
      </div>
      <ul className='nav-menu'>
        <li>
          <Link to="/" style={{ textDecoration: 'none',  color: 'inherit' }} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/whats-on" style={{ textDecoration: 'none',  color: 'inherit' }}  className={location.pathname === "/whats-on" ? "active" : ""}>
            Whats On
          </Link>
        </li>
        <li>
          <Link to="/contact-us" style={{ textDecoration: 'none',  color: 'inherit' }} className={location.pathname === "/contact-us" ? "active" : ""}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
