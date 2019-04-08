import React, { Component } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import "../Styles/facts.css";
import Noty from "noty";
import { connect } from "react-redux";

import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/bootstrap-v4.css";

class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: [],
      active: "",
      randomFact: "",
      selectedCat: "",
      selectedFact: "",
      id: -1,
      categories: [
        "explicit",
        "dev",
        "movie",
        "food",
        "celebrity",
        "science",
        "sport",
        "political",
        "religion",
        "animal",
        "history",
        "music",
        "travel",
        "career",
        "money",
        "fashion"
      ]
    };
  }

  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          randomFact: data.value
        });
      })
      .catch(err => {
        console.log("error");
      });
  }

  getNewRand = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => {
        this.setState({
          randomFact: data.value
        });
      })
      .catch(err => {
        console.log("error");
      });
  };

  handleCategory = event => {
    var elements = document.getElementsByClassName("active");
    if (elements.length > 0) {
      elements[0].classList.remove("active");
    }

    event.target.classList.add("active");

    this.setState(
      {
        selectedCat: event.currentTarget.textContent.toLowerCase().trim()
      },
      () => {
        fetch(
          `https://api.chucknorris.io/jokes/random?category=${
            this.state.selectedCat
          }`
        )
          .then(response => response.json())
          .then(data => {
            this.setState({ selectedFact: data.value });
          })
          .catch(err => console.log("err"));
      }
    );
  };

  handleFav = event => {
    var fact = document.getElementsByClassName("randFact");

    var facts = this.state.saved;
    if (facts.includes(fact[0].textContent)) {
      new Noty({
        type: "success",
        theme: "bootstrap-v4",
        layout: "topRight",
        text: "Already Saved!",
        timeout: 3000
      }).show();
    } else {
      this.setState(
        {
          id: this.state.id + 1,
          saved: this.state.saved.concat(fact[0].textContent)
        },
        () => {
          let factData = {
            id: this.state.id,
            text: fact[0].textContent
          };
          this.props.addFact(factData);
        }
      );

      new Noty({
        type: "success",
        theme: "bootstrap-v4",
        layout: "topRight",
        text: "Fact Saved!",
        timeout: 3000
      }).show();
    }
  };

  handleFavResults = event => {
    var fact = document.getElementsByClassName("results");

    var facts = this.state.saved;
    if (facts.includes(fact[0].textContent)) {
      new Noty({
        type: "success",
        theme: "bootstrap-v4",
        layout: "topRight",
        text: "Already Saved!",
        timeout: 3000
      }).show();
    } else {
      this.setState(
        {
          id: this.state.id + 1,
          saved: this.state.saved.concat(fact[0].textContent)
        },
        () => {
          let factData = {
            id: this.state.id,
            text: fact[0].textContent
          };
          this.props.addFact(factData);
        }
      );

      new Noty({
        type: "success",
        theme: "bootstrap-v4",
        layout: "topRight",
        text: "Fact Saved!",
        timeout: 3000
      }).show();
    }
  };

  render() {
    // console.log(this.props.facts);
    return (
      <div className="wrap">
        <Header />
        <div className="facts">
          <h3 id="rand">Random Fact</h3>
          <div className="random">
            <div className="randFact">
              {this.state.randomFact}
              <div
                id="randSave"
                onClick={this.handleFav}
                class="fav glyphicon glyphicon-heart"
              />
            </div>
            <button onClick={this.getNewRand} className="newFact">
              Get A New Fact! <span className="glyphicon glyphicon-refresh" />
            </button>
          </div>
          <h3>Or Get By Category</h3>
          <div className="choose">
            <div className="categories">
              {this.state.categories.map((cat, id) => {
                return (
                  <div
                    id={id}
                    onClick={this.handleCategory}
                    className="glyphicon glyphicon-refresh category">
                    &nbsp;{cat.toUpperCase()}
                  </div>
                );
              })}
            </div>
            <div className="results">
              {this.state.selectedFact}
              <div
                id="catgSave"
                onClick={this.handleFavResults}
                class="fav glyphicon glyphicon-heart"
              />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    facts: state.facts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFact: (text, id) => {
      dispatch({ type: "ADD_FACT", payload: text, id: id });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Facts);
