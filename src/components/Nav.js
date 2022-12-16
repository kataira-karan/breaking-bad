import React from "react";
import "../styles/NavStyle.css";

const Nav = () => {
  return (
    <nav className="nav-container" id="navigation">
      <ul>
        <li>Episodes</li>
        <li>Quotes</li>
        <li>Deaths</li>
      </ul>
    </nav>
  );
};

export default Nav;
