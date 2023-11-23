import React, { useState } from "react";

import "./navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
    <NavLink to="/" className="title">
    <h1 className='na1_vimg'>jayasreek2910@gmail.com</h1>
    <h1 className='nav2_img'>9789191827</h1>
    </NavLink>
    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="./Skills">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Education</NavLink>
      </li>
      <li>
        <NavLink to="/services">Experience</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Follow Me</NavLink>
      </li>
    </ul>
  </nav>
    );
};

export default Navbar