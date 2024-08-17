import React from 'react';
import './Navbar.css'; // Stelle sicher, dass du die CSS-Datei importierst

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Fantastic Sites
      </div>
      <ul className="navbar-links">
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;