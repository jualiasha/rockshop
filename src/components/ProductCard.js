import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions/cartactions";
import { messages } from "../utils/messages";
import { addMessage } from "../store/actions/messageactions";
import { Link } from "react-router-dom";

const ProductCard = ({ name, price, amount, src, product, id }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    /* event.stopPropagation(); */
    if (product.quantity === 0) {
      dispatch(addMessage(messages.stock));
    } else {
      dispatch(addProduct(product));
    }
  };

  return (
    <div className={amount > 0 ? "rock--incart" : "rock"}>
      <Link
        to={{
          pathname: `/${name.split(" ").join("-")}`,
          state: { id },
        }}
      >
        <h3>{name}</h3>
      </Link>
      <Link
        to={{
          pathname: `/${name.split(" ").join("-")}`,
          state: { id },
        }}
      >
        <img className="rock__img" src={src} alt={name}></img>
      </Link>
      <p className="rock__price">{price}€</p>
      <div className="rock__buttoncontainer">
        <div className="rock__buttoncontainer__counter">{amount}</div>
        <div
          className="rock__buttoncontainer__cart"
          onClick={() => handleClick(product)}
        >
          <AddShoppingCartIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
