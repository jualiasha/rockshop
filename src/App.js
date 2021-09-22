import React, { useEffect } from "react";
import Header from "./containers/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import { initializeProducts } from "./store/actions/productactions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <main>
        <div className="waterfall"></div>
        <div className="waterfall"></div>
        <div className="waterfall"></div>
        <div className="waterfall"></div>
        <div className="waterfall"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/:id" component={ProductPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
