import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductCard = ({ name, price, amount, src }) => {
  return (
    <div className="rock">
      <div className="background"></div>
      <h3>{name}</h3>
      <img src={src}></img>
      <p className="price">{price}€</p>
      <div className="buttoncontainer">
        <div className="buttoncontainer__counter">{amount}</div>
        <div className="buttoncontainer__cart">
          <AddShoppingCartIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
