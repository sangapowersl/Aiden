import React from 'react';
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <div className="navbar-content-col-1">
          <div className="logo-container">
            <img src={logo} alt="logo"/>
          </div>
          <div className="navbar-search">
            <input type="text" />
          </div>
        </div>
        <div className="navbar-content-col-2">
          <ul>
            <li>Links</li>
            <li>Links</li>
            <li>Links</li>
            <li>Links</li>
            <li>Links</li>
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default Navbar