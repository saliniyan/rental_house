import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand"></div>
      <ul className="navbar-links">
        {currentUser && (
          <li>
            <Link to="/home" className="navbar-item">Home</Link>
          </li>
        )}
        {!currentUser && (
          <li>
            <Link to="/" className="navbar-item">Login</Link>
          </li>
        )}
        <li>
          <Link to="/about" className="navbar-item">About</Link>
        </li>
        <li>
          <Link to="/service" className="navbar-item">Service</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-item">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
