import React, { Component } from "react";
import Home from "./Pages/Home";
import Facts from "./Pages/Facts";
import Saved from "./Pages/Saved";
import About from "./Pages/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/facts" component={Facts} />
          <Route path="/saved" component={Saved} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
