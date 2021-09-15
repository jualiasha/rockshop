import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";

import { Grid, Typography, Box } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { initializeProducts } from "../store/actions/productactions";

const Home = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);
  /* const [products, setProducts] = useState();

  useEffect(() => {
    if (!products) {
      axios
        .get("http://localhost:3001/rocks")
        .then((response) => setProducts(response.data));
    }
  }, [products, setProducts]); */

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
                          ? cart.items[product.id].quantity
                          : 0
                      }
                      src={product.src}
                      product={product}
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
