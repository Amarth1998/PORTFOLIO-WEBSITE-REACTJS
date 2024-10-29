import React, { useState } from "react";
import "../style/Navbar.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <> 
    <div id="container">
      <div id="logo">Amarth Patel</div>

      <div id="link">
        <ul id="menuList" className={menuOpen ? "open" : ""}>
          <li>
            <Link className="incre" to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link className="incre" to="About" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          {/* <li>
            <Link className="incre" to="Projects" onClick={handleLinkClick}>
              Projects
            </Link>
          </li> */}
          <li>
            <Link className="incre" to="Project" onClick={handleLinkClick}>
              Project
            </Link>
          </li>
          <li>
            <Link className="incre" to="Notes" onClick={handleLinkClick}>
              Notes
            </Link>
          </li>
          <li>
            <Link className="incre" to="Contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div id="icon">
        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      </div>



    
    </div>


    <div>
        <Outlet/>
    </div>

<br /> <br /> <br /><br />
    <Footer/>
    </>


  );
};

export default Navbar;
