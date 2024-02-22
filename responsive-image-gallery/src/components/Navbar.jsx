import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleInfo, faEnvelope, faHouse, faImages } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleShowNavbar}>
         <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
      <ul className="navbar-nav">
        <li className="nav-item">
        <FontAwesomeIcon icon={faHouse} />
          <a href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
        <FontAwesomeIcon icon={faImages} />
          <a href="#gallery"> Gallery</a>
        </li>
        <li className="nav-item">
        <FontAwesomeIcon icon={faEnvelope} />
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-item">
        <FontAwesomeIcon icon={faCircleInfo} />
          <a href="#about">About</a>
        </li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
