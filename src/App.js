import React, { useEffect } from "react";
import Header from "./containers/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Message from "./components/Message";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import { initializeProducts } from "./store/actions/productactions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { message } = useSelector((state) => state.message);
  const { messageText } = message;
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
      {messageText && <Message />}
      <Footer />
    </Router>
  );
}

export default App;
