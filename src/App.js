import Header from "./containers/Header";
import Footer from "./containers/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rocks from "./pages/Rocks";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={ProductPage} />
          <Route path="/about" component={Rocks} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
