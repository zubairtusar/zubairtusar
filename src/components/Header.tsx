import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/" className="logo-link">
            Zubair Rahman Tusar
          </NavLink>
        </div>
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/academia" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Academia
          </NavLink>
          <NavLink 
            to="/professional" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Professional
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/others" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Others
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;