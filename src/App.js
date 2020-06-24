import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <br />
          <Route path="/" exact component={BookList} />
        </div>
      </Router>
    );
  }
}

export default App;
