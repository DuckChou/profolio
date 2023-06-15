import React, { useState } from 'react';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Keren Zhou</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Jason Zhou</div>
        <div className="hamburger-menu">
          <div className={showMenu ? "hamburger-icon open" : "hamburger-icon"} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={showMenu ? "menu-links show" : "menu-links"}
            style={{ overflow: showMenu ? 'visible' : 'hidden' }}
          >
            <li>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
