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
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
   setCart(cart.map((item) => item.id === book.id
   ?
    { ...item, quantity: +quantity, }
    : item
    )
  );
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
          render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
