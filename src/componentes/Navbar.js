import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container-fluid">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          App
        </NavLink>
        <NavLink 
          to="/adulto-mayor" 
          className={({ isActive }) => `nav-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          Adulto Mayor
        </NavLink>
        <NavLink 
          to="/Educacion" 
          className={({ isActive }) => `nav-link text-white ${isActive ? 'active-link' : ''}`} 
        >
          Educación
        </NavLink>
        
        <span className="nav-indicador"></span>
      </div>
    </nav>
  );
}

export default Navbar;
