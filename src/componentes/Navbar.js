import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserShield, FaGraduationCap, FaBriefcase, FaMoneyBill } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Protección Social
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''} d-flex align-items-center`} 
              >
                <FaHome className="me-2" />
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/adulto-mayor" 
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''} d-flex align-items-center`} 
              >
                <FaUserShield className="me-2" />
                Adulto Mayor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/Educacion" 
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''} d-flex align-items-center`} 
              >
                <FaGraduationCap className="me-2" />
                Educación
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/Empleo" 
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''} d-flex align-items-center`} 
              >
                <FaBriefcase className="me-2" />
                Empleo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/Pensiones" 
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''} d-flex align-items-center`} 
              >
                <FaMoneyBill className="me-2" /> 
                Pensiones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/Login" 
                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''} d-flex align-items-center`} 
              >
                <FaMoneyBill className="me-2" /> 
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
