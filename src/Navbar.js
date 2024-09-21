import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </div>
      <ul className="navbar-link">
      <li><a>Delivering to Shimoga 📍</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" className="navbar-search-input" placeholder="Search Amazon.in" />
        <button className="navbar-search-button">🔍</button>
      </div>

      <ul className="navbar-links">
       
        <li><a href="#registry">Returns&Orders</a></li>
        
      </ul>

      <div className="navbar-cart">
        <span>🛒</span>
        <p>Cart</p>
      </div>
    </nav>
  );
}

export default Navbar;
