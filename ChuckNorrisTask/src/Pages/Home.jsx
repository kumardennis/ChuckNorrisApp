import React, { Component } from "react";
import Header from "./Header";
import "../Styles/home.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrap">
        <Header />

        <div className="home">
          <div className="intro">
            <h2 id="h2">Welcome, To The 'Facts About Chuck Norris' Website!</h2>
            <br />
            <h4>
              Here you will find some cool and random fun facts/jokes about the
              legend, Chuck Norris.
            </h4>
            <br />
            <h5>
              Start by Choosing a category or simply just get a random fact!
            </h5>
          </div>
          <div className="buttons">
            <button className="big-btn">
              <NavLink className="link" to="./facts">
                Go To Facts! <span className="glyphicon glyphicon-fire" />
              </NavLink>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
