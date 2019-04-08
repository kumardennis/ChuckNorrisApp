import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/about.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrap">
        <Header />
        <div className="about">
          <div className="aboutmyself">
            Hi!
            <br />
            <br />I am Dennis Kumar. I made this website using Reactjs and
            Redux. I studied engineering in university (TalTech), but I have
            been working in IT sector for more than a year now. I have
            experience in Reactjs, Javascript, jQuery, HTML5, CSS3 and Python. I
            am familiar with JAVA, C/C++, Nodejs, Firebase, MongoDB, MySQL, PHP
            and C#.
            <br />
            <br />
            Off-work, I do music and sports. I sell music on spotify and other
            digital stores as well.
            <br />
            <br />I am a professional badminton player as well, ranked 12 in
            Estonia.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
