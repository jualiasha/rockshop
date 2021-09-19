import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { ArrowRightAlt, AddShoppingCart } from "@material-ui/icons";
import { messages } from "../utils/messages";
import { addMessage } from "../store/actions/messageactions";
import { initializeProducts } from "../store/actions/productactions";
import { addProduct } from "../store/actions/cartactions";

const ProductPage = () => {
  /*defining location of the page*/
  let location = useLocation();
  /*defining previous page for "go back" button*/
  let history = useHistory();
  let productdata = undefined;
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(initializeProducts());
    const foundproduct = products.find(
      (product) => product.id === location.state.id
    );
    setProduct(foundproduct);
  }, [dispatch]);
  let cartProduct = {};

  cartProduct = cart.items[product.id] ? cart.items[product.id] : {};

  const handleClick = (product) => {
    if (product.quantity === 0) {
      dispatch(addMessage(messages.stock));
    } else {
      dispatch(addProduct(product));
    }
  };

  if (!product) {
    productdata = <h1>Loading...</h1>;
  } else {
    productdata = (
      <div className="productpage">
        <Grid container>
          <Grid item xs={6} sm={4}>
            {/* <ProductCard
              name={product.name}
              src={product.src}
              price={product.price}
              amount={cartProduct ? cartProduct.cartQuantity : 0}
              product={product}
              id={product.id}
            /> */}
            <div className="productpage__image">
              <img
                className="rock__img"
                src={product.src}
                alt={product.name}
              ></img>
              <p className="rock__price">{product.price}€</p>
              <div className="productpage__buttoncontainer">
                <div className="rock__buttoncontainer__counter">
                  {cartProduct.cartQuantity > 0 ? cartProduct.cartQuantity : 0}
                </div>
                <div
                  className="rock__buttoncontainer__cart"
                  onClick={() => handleClick(product)}
                >
                  <AddShoppingCart style={{ fontSize: 30 }} />
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={6} sm={8}>
            <section className="productpage__description">
              <h1 className="productpage__description__heading">
                {product.name}
              </h1>
              <p className="productpage__description__categoryname">
                {product.category}
              </p>
              <p className="productpage__description__text">
                {product.description}
              </p>
              <p className="productpage__description__stockitems">
                Items left: {product.quantity}
              </p>
              <p
                className="productpage__gobackbutton"
                role="button"
                onClick={() => {
                  history.goBack();
                }}
              >
                <ArrowRightAlt
                  className="productpage__description__gobackbutton"
                  style={{ fontSize: 40 }}
                />
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
