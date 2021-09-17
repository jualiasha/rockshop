import React from "react";
import CartTable from "../components/CartTable";
import { useSelector } from "react-redux";
import { itemsToArray } from "../utils";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  let itemsArray = [];
  itemsArray = itemsToArray(cart.items);
  return (
    <section className="cart">
      <h1>Cart</h1>
      <CartTable products={itemsArray} />
    </section>
  );
};

export default Cart;
