import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo">
          <img src="./logo.png" alt="Blog" />
        </Link>
        <div className="navbar__toggle" id="mobile-menu" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'is-active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'is-active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'is-active' : ''}`}></span>
        </div>
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link to="/" className="navbar__links" id="home-page">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__links" id="about-page">Explore</Link>
          </li>
          <li className="navbar__item">
            <Link to="/create" className="navbar__links" id="create-post">Create Post</Link>
          </li>
          <li className="navbar__btn">
            <Link to="/signup" className="button" id="signup">SignUp</Link>
          </li>
          <li className="navbar__btn">
            <Link to="/login" className="button" id="login">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
