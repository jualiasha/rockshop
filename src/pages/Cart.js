import React from "react";
import CartTable from "../components/CartTable";

import { Grid } from "@material-ui/core";

const Cart = () => {
  const handleClick = () => {
    alert("Thank you!");
  };

  return (
    <section className="cart">
      <h1>Cart</h1>
      <CartTable />
      <Grid container justifyContent="center">
        <Grid item sm={6}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <button onClick={handleClick} className="cart__checkoutbutton">
            Confirm&Checkout
          </button>
        </Grid>
      </Grid>
    </section>
  );
};

export default Cart;
