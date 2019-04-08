import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/header.css";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSaveOpen = () => {
    document.getElementById("saved").style.width = "1000px";
  };

  handleSaveClose = () => {
    document.getElementById("saved").style.width = "0px";
  };
  render() {
    return (
      <div className="header">
        <div id="saved" className="saved">
          <span
            onClick={this.handleSaveClose}
            className="close glyphicon glyphicon-remove"
          />
          <h2>Saved Facts</h2>
          {this.props.facts.map((fact, id) => {
            return (
              <div id={String(id) + "saved"} className="savedFact">
                {fact.text}
              </div>
            );
          })}
        </div>
        <div className="logo-container">
          <div className="logo" />
          <div id="h1-container">
            <h1 id="h1">Facts About Chuck Norris!</h1>
          </div>
        </div>
        <div className="navigation">
          <button id="home" className="hd_btn btn btn-light">
            <NavLink className="link" to="./">
              Home <span className="glyphicon glyphicon-home" />
            </NavLink>
          </button>
          <button className="hd_btn btn btn-light">
            <NavLink className="link" to="./facts">
              Facts <span className="glyphicon glyphicon-sunglasses" />
            </NavLink>
          </button>
          <button
            onClick={this.handleSaveOpen}
            className="link hd_btn btn btn-light">
            Saved <span className="glyphicon glyphicon-heart" />
          </button>
          <button id="about" className="hd_btn btn btn-light">
            <NavLink className="link" to="./about">
              About <span className="glyphicon glyphicon-question-sign" />
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    facts: state.facts
  };
};

export default connect(mapStateToProps)(Header);
