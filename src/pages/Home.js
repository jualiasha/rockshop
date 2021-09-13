import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { Grid, Typography, Box } from "@material-ui/core";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    if (!products) {
      axios
        .get("http://localhost:3001/rocks")
        .then((response) => setProducts(response.data));
    }
  }, [products, setProducts]);

  let productdata = undefined;

  !products
    ? (productdata = <h1>Loading...</h1>)
    : (productdata = (
        <Grid container justifyContent="center">
          {products?.length &&
            products.map((product) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={3}
                  md={2}
                  key={product.id || product.productCategory}
                >
                  <Box my={2} />
                  {product.productCategory ? (
                    <Grid container justifyContent="center" alignItems="center">
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
                      amount="0"
                      src={product.src}
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
