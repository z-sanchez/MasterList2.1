import React from "react";
import "../css/index.css";
import logo from "../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div id="headerFlex">
          <img src={logo} id="logo"></img>
          <p id="timeDisplay">8:21pm</p>
        </div>
      </header>
    );
  }
}

export default Header;
