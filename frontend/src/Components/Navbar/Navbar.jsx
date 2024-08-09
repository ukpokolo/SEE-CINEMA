import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import navlogo from '../Assets/logo.png';

function Navbar() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    setBurgerClass(isMenuClicked ? "burger-bar unclicked" : "burger-bar clicked");
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
  };

  return (
    <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="nav-logo">
        <img src={navlogo} alt="Logo" />
        <p className='nav-logoText'>SEE CINEMA</p>
      </div>
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
      <ul className={`${menuClass} nav-menu`}>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} style={{ textDecoration: 'none', color: 'inherit' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className={location.pathname === "/contact-us" ? "active" : ""} style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
