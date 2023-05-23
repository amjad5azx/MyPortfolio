import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="main_navbar">
      <div className="name">
        <a href="#about">Muhammad Amjad</a>
      </div>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#github">GitHub</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
