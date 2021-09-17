import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addProduct, reduceQuantity } from "../store/actions/cartactions";
import { messages } from "../utils/messages";
import { addMessage } from "../store/actions/messageactions";

const ProductCard = ({ name, price, amount, src, product }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    if (product.quantity === 0) {
      dispatch(addMessage(messages.stock));
    } else {
      dispatch(addProduct(product));
    }
  };
  return (
    <div className={amount > 0 ? "rock--incart" : "rock"}>
      <h3>{name}</h3>
      <img className="rock__img" src={src} alt={name}></img>
      <p className="rock__price">{price}€</p>
      <div className="rock__buttoncontainer">
        <div className="rock__buttoncontainer__counter">{amount}</div>
        <div className="rock__buttoncontainer__cart">
          <AddShoppingCartIcon
            style={{ fontSize: 30 }}
            onClick={() => handleClick(product)}
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
