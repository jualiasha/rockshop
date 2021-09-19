import React, { useState } from "react";
import { ShoppingCart, Menu } from "@material-ui/icons";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <div className="toppanel">
        <Link to="/">
          <div className="logo">RockShop</div>
        </Link>
        <div className="menuicon">
          <Menu style={{ fontSize: 40 }} role="button" onClick={menuHandler} />
        </div>
        <Link to="/cart">
          <div className="cartbox">
            <ShoppingCart
              className={
                cart.totalQuantity > 0
                  ? "cartbox__shoppingcart--withitems"
                  : "cartbox__shoppingcart"
              }
            />
            <div className="cartbox__counter">{cart.totalQuantity}</div>
          </div>
        </Link>
      </div>
      {menuOpen ? <Nav click={menuHandler} /> : null}
    </header>
  );
};

export default Header;
