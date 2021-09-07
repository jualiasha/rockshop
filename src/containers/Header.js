import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/rocks">Rocks</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
