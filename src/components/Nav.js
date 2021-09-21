import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

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
          <NavHashLink to="/#igneousrocks" onClick={click}>
            IgneousRocks
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#metamorphicrocks" onClick={click}>
            MetamorphicRocks
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#minerals" onClick={click}>
            Minerals
          </NavHashLink>
        </li>
        <li>
          <NavHashLink to="/#sedimentaryrocks" onClick={click}>
            SedimentaryRocks
          </NavHashLink>
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
