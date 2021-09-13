import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ click }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" onClick={click}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={click}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" onClick={click}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
