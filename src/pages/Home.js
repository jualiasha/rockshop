import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SimpleBackdrop from "../components/Backdrop";
import { Grid, Typography, Box, Zoom } from "@material-ui/core";
import { useSelector } from "react-redux";

const Home = () => {
  const productsState = useSelector((state) => state.products);
  const [products, setProducts] = useState(() => productsState);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (productsState.length) {
      setProducts(() => productsState);
    }
  }, [productsState, setProducts]);

  /* if (products) {
    const categoryfilter = products.filter((product) => {
      return product.category
        .toLocaleLowerCase()
        .includes(categories.igneousRocks.toLocaleLowerCase());
    });
  } */

  const filterCategoryHandler = (categoryName) => {
    const filteredProducts = products.filter((product) => {
      /* console.log(product?.category == categoryName); */
      return product.productCategory
        ? product.productCategory === categoryName
        : product?.category === categoryName;
    });
    setProducts(filteredProducts);
  };

  const allProductsHandler = () => {
    setProducts(() => productsState);
  };
  console.log(productsState);
  /* const categoryfilter = products.filter((product) => {
    return product.category.toLocaleLowerCase().includes("hello")
  }) */

  return (
    <div className="homepage">
      {/* <ul>
        <li>Igneous Rocks</li>
        <li>Metamorphic Rocks</li>
        <li>Minerals</li>
        <li>Sedimentary Rocks</li>
      </ul> */}
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
              style={{ cursor: "pointer" }}
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
