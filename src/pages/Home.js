import React, { useEffect, useState } from "react";
import ProductCard from "../containers/ProductCard";
import SimpleBackdrop from "../containers/Backdrop";
import { Grid, Typography, Box, Zoom } from "@material-ui/core";
import { useSelector } from "react-redux";

const Home = () => {
  const productsState = useSelector((state) => state.products); //products from redux
  const [products, setProducts] = useState(() => productsState); // state for filtering products by categories
  const cart = useSelector((state) => state.cart); // cart state from redux

  useEffect(() => {
    // initial state of products from redux
    if (productsState.length) {
      setProducts(() => productsState);
    }
  }, [productsState, setProducts]);

  const filterCategoryHandler = (categoryName) => {
    //filtering products by category on click
    const filteredProducts = products.filter((product) => {
      return product.productCategory
        ? product.productCategory === categoryName
        : product?.category === categoryName;
    });
    setProducts(filteredProducts);
  };

  const allProductsHandler = () => {
    //show initial product state
    setProducts(() => productsState);
  };

  return (
    <div className="homepage">
      {!products?.length ? (
        <SimpleBackdrop />
      ) : (
        <Grid container justifyContent="center" alignItems="center">
          {products.map((product) => {
            return (
              <Zoom in={true} key={product.id || product.productCategory}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Box
                    my={2}
                    id={product.productCategory
                      ?.split(" ")
                      .join("")
                      .toLowerCase()}
                  />
                  {product.productCategory ? (
                    <Grid container alignItems="center" justifyContent="center">
                      <Grid item xs={12}>
                        <Typography
                          variant="h2"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            filterCategoryHandler(product.productCategory)
                          }
                        >
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
              </Zoom>
            );
          })}
          <Grid item xs={6} sm={4} md={3} lg={2}>
            <Typography
              variant="h2"
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={() => allProductsHandler()}
            >
              ALL
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Home;
