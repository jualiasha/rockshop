import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Slide } from "@material-ui/core";

const Nav = ({ click }) => {
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" onClick={click}>
              Home
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
    </Slide>
  );
};

export default Nav;
