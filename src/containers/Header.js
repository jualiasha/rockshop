import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Nav from "../components/Nav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="toppanel">
        <div className="logo">RockShop</div>
        <div className="menuicon">
          <MenuIcon
            style={{ fontSize: 40 }}
            role="button"
            onClick={menuHandler}
          />
        </div>
        <div className="cartbox">
          <ShoppingCartIcon style={{ fontSize: 40 }} />
          <div className="counter">100</div>
        </div>
      </div>
      {menuOpen ? <Nav click={menuHandler} /> : null}
    </header>
  );
};

export default Header;
