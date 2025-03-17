import React from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li><NavLink to="/state-management" className="nav-link">State Management</NavLink></li>
          <li><NavLink to="/ui" className="nav-link">UI Components</NavLink></li>
          <li><NavLink to="/networking" className="nav-link">Networking</NavLink></li>
          <li><NavLink to="/animation" className="nav-link">Animation</NavLink></li>
          <li><NavLink to="/games" className="nav-link">Games</NavLink></li>
          <li><NavLink to="/utilities" className="nav-link">Utilities</NavLink></li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Navbar;