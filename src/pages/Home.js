import React from "react";
import ProductCard from "../components/ProductCard";

import { Grid, Typography, Box } from "@material-ui/core";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  let productdata = undefined;

  !products
    ? (productdata = <h1>Loading...</h1>)
    : (productdata = (
        <Grid container justifyContent="center" alignItems="center">
          {products?.length &&
            products.map((product) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={2}
                  key={product.id || product.productCategory}
                >
                  <Box my={2} />
                  {product.productCategory ? (
                    <Grid container alignItems="center" justifyContent="center">
                      <Grid item xs={12}>
                        <Typography variant="h2">
                          {product.productCategory}
                        </Typography>
                      </Grid>
                    </Grid>
                  ) : (
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      amount={
                        cart.items[product.id]
                          ? cart.items[product.id].cartQuantity
                          : 0
                      }
                      src={product.src}
                      product={product}
                      id={product.id}
                    />
                  )}
                </Grid>
              );
            })}
        </Grid>
      ));

  return <>{productdata}</>;
};

export default Home;
