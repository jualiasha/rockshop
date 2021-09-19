import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import ProductCard from "../components/ProductCard";
import { initializeProducts } from "../store/actions/productactions";

const ProductPage = () => {
  /*defining location of the page*/
  let location = useLocation();
  /*defining previous page for "go back" button*/
  let history = useHistory();
  let productdata = undefined;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(initializeProducts());
    const foundproduct = products.find(
      (product) => product.id === location.state.id
    );
    setProduct(foundproduct);
  }, [dispatch]);

  if (!product) {
    productdata = <h1>Loading...</h1>;
  } else {
    productdata = (
      <div className="productpage">
        <Grid container>
          <Grid item xs={6} sm={4}>
            <div className="producpage__image">
              <div className={amount > 0 ? "rock--incart" : "rock"}>
                <h3>{product.name}</h3>
                <img className="rock__img" src={src} alt={product.name}></img>
                <p className="rock__price">{product.price}€</p>
                <div className="rock__buttoncontainer">
                  <div className="rock__buttoncontainer__counter">amount</div>
                  <div
                    className="rock__buttoncontainer__cart"
                    onClick={() => handleClick(product)}
                  >
                    <AddShoppingCartIcon style={{ fontSize: 30 }} />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sm={8}>
            <section className="productpage__description">
              <h1>{product.name}</h1>
              <p className="productpage__categoryname">{product.category}</p>
              <p className="productpage__description">{product.description}</p>
              <p className="productpage__stockitems">
                Items left: {product.quantity}{" "}
              </p>
              <p
                className="productpage__gobackbutton"
                onClick={() => {
                  history.goBack();
                }}
              >
                <ArrowRightAlt style={{ fontSize: 40 }} />
                Go Back
              </p>
            </section>
          </Grid>
        </Grid>
      </div>
    );
  }
  return <div>{productdata}</div>;
};

export default ProductPage;
