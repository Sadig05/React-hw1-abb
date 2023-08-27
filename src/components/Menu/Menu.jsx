import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.scss';

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'link')} >Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : 'link')}>Cart</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active-link' : 'link')}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
