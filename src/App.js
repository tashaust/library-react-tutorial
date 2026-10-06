import React from 'react';
import Nav from "./components/nav.jsx";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/books.jsx";
import { books } from "./data.js";
import BookInfo from './pages/bookinfo.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} />} />
        <Route path="/books1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
