import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Logged out successfully!');
    navigate('/');
  };

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo">SimplyFly</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/flights">FLIGHTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div>
        {isAuthenticated ? (
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
