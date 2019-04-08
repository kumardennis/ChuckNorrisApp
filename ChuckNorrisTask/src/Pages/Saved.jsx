import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="saved">
        <Header />
        <span>this is saved</span>
        <Footer />
      </div>
    );
  }
}

export default Saved;
