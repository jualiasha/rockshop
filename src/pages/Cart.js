import React from "react";
import CartTable from "../components/CartTable";
import { useSelector, useDispatch } from "react-redux";
/* import { itemsToArray } from "../utils";
import {
  addProduct,
  reduceQuantity,
  removeProduct,
} from "../store/actions/cartactions";
import { messages } from "../utils/messages";
import { addMessage } from "../store/actions/messageactions"; */

const Cart = () => {
  /* const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); */

  return (
    <section className="cart">
      <h1>Cart</h1>
      <CartTable />
    </section>
  );
};

export default Cart;
