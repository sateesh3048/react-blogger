import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
  <header>
    <nav className="nav nav-pills nav-fill">
      <NavLink to="/articles" className="nav-item nav-link">Articles</NavLink>
      <NavLink to="/support" className="nav-item nav-link">Support</NavLink>
    </nav>
  </header>
);
export default Header;