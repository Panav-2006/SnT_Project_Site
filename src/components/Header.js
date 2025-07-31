import React, { useState } from "react";
import "./header.css";
const Header = ({ setShowModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="container">
        <a href="localhost:3000" className="logo">
          <img
            className="web-logo"
            src="https://th.bing.com/th/id/OIP.tAa6rmkf2AneA1J36x_UAgHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
            alt="Logo"
          />
          {/* Science and Technology Council */}
        </a>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <a href="localhost:3000" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#clubs" onClick={() => setMenuOpen(false)}>
              Clubs
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          {/* <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li> */}
          <li>
            <button
              className="btn btn-outline"
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
