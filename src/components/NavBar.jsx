import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="logo">
            <Link to={'/'}><h1>Pizza</h1></Link>
            
          </div>
          <ul  onClick={()=>setIsOpen(false)}
          className={`navbar-links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <button className="toggle-button" onClick={toggleNavbar}>
            {isOpen ? <CloseTwoToneIcon /> : <MenuTwoToneIcon />}
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
