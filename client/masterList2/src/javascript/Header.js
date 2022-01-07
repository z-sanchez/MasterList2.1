import React from "react";
import "../css/index.css";
import logo from "../images/logo.png";

class Header extends React.Component {

  componentDidMount() {
     this.refreshClock();
   }

  refreshClock() {
    setTimeout(() => { this.clock()}, 1000);
  }

  clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let session = "AM";

    if (hour === 0) {
      hour -= 12;
      session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;

    let time = hour + ":" + minute + "" + session;

    document.getElementById("timeDisplay").innerText = time;
    this.refreshClock()
  }

  render() {
    return (
      <header id="header">
        <div id="headerFlex">
          <img alt={"logo"} src={logo} id="logo" />
          <p id="timeDisplay"></p>
        </div>
      </header>
    );
  }
}

export default Header;
