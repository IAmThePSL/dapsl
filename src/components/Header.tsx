import React from "react";
import "../styles/main.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="logo-link">
          <img
            src="/dapsl-high-resolution-logo-no-text-dark.jpg"
            alt="DaPSL Logo"
            className="logo-img"
          />
        </a>
        <a href="/" className="logo-link">
          <div className="logo">DaPSL's Portfolio</div>
        </a>
        <div className="nav-links">
          <a href="#intro" className="nav-link">
            Home
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
