import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "hsl(210, 15%, 10%)",position:"fixed",width:"100%" }}>
  <div className="container">
    <div className="d-flex justify-content-start">
      <a className="navbar-brand" style={{ color: "#fff", textDecoration: "none", padding: "5px 10px", fontSize: "x-large", fontWeight: "bold", fontFamily: "Times New Roman, serif" }} href="#about">Muhammad Amjad</a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#about">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#github">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
