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
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
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
      <ul className={`nav-menu ${isMenuClicked ? 'visible' : 'hidden'}`}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }} className={location.pathname === "/contact-us" ? "active" : ""}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
