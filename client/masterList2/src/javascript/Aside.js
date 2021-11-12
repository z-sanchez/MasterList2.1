import React from "react";
import "../css/index.css";
import oneView from "../images/oneView.svg";
import allView from "../images/allView.svg";
import trashView from "../images/trashView.svg";
import toggledOn from "../images/toggledOn.svg";
import Calendar from "./Calendar";

class Aside extends React.Component {
  render() {
    return (
      <aside id="aside">
        <div id="oneViewSelector" className="viewSelector viewSelector--purple">
          <p className="viewSelector__name">1 Day</p>
          <img
            src={oneView}
            alt="oneView"
            className="viewSelector__image"
          ></img>
          <img src={toggledOn} alt="on" className="viewSelector--on"></img>
        </div>
        <div id="oneViewSelector" className="viewSelector viewSelector--blue">
          <p className="viewSelector__name">All</p>
          <img
            src={allView}
            alt="oneView"
            className="viewSelector__image"
          ></img>
        </div>
        <div id="oneViewSelector" className="viewSelector viewSelector--pink">
          <p className="viewSelector__name">Trash</p>
          <img
            src={trashView}
            alt="oneView"
            className="viewSelector__image"
          ></img>
        </div>
        <Calendar />
      </aside>
    );
  }
}

export default Aside;
