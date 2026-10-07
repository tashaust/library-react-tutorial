import React, { useState, useEffect } from "react";
import Nav from "./components/nav.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/books.jsx";
import { books } from "./data.js";
import BookInfo from "./pages/bookinfo.jsx";
import Cart from "./pages/cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart,book]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);
    
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} />}
        />
        <Route path="/cart" render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
