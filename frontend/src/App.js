import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductInfo from "./pages/ProductInfo";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductInfo} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
