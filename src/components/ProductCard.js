import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch } from "react-redux";
import {
  addProduct,
  reduceQuantity,
  removeProduct,
} from "../store/actions/cartactions";

const ProductCard = ({ name, price, amount, src, product }) => {
  const dispatch = useDispatch();
  return (
    <div className="rock">
      <h3>{name}</h3>
      <img src={src} alt={name}></img>
      <p className="price">{price}€</p>
      <div className="buttoncontainer">
        <div className="buttoncontainer__counter">{amount}</div>
        <div className="buttoncontainer__cart">
          <AddShoppingCartIcon
            style={{ fontSize: 30 }}
            onClick={() => {
              dispatch(addProduct(product));
            }}
          />
        </div>
        <button onClick={() => dispatch(reduceQuantity(product))}>
          Reduce
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
