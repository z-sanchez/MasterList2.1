import React from "react";
import "../css/index.css";
import oneView from "../images/oneView.svg";
import allView from "../images/allView.svg";
import trashView from "../images/trashView.svg";
import toggledOn from "../images/toggledOn.svg";
import Calendar from "./Calendar";
import { DateContext } from "../javascript/context";

class Aside extends React.Component {
  static contextType = DateContext;

  toggleAll = () => {
    this.context.toggleViewMode("all");
  };

  toggleOne = () => {
    this.context.toggleViewMode("oneDay");
  };

  toggleFinshed = () => {
    this.context.toggleViewMode("finished");
  };

  toggleIndicatorPurple = () => {
    if (this.context.viewMode === "oneDay") return (<img src={toggledOn} alt={"on"} className={"viewSelector--on"}/>);
  };

  toggleIndicatorBlue = () => {
    if (this.context.viewMode === "all") return (<img src={toggledOn} alt={"on"} className={"viewSelector--on"}/>);
  };

  toggleIndicatorPink = () => {
    if (this.context.viewMode === "finished") return (<img src={toggledOn} alt={"on"} className={"viewSelector--on"}/>);
  };

  render() {
    return (
      <aside id="aside">
        <div id="viewSelector--purple" className="viewSelector" onClick={this.toggleOne}>
          <p className="viewSelector__name">1 Day</p>
          <img
            src={oneView}
            alt="oneView"
            className="viewSelector__image"
          />
          {this.toggleIndicatorPurple()}
        </div>
        <div id="viewSelector--blue" className="viewSelector" onClick={this.toggleAll}>
          <p className="viewSelector__name">All</p>
          <img
            src={allView}
            alt="oneView"
            className="viewSelector__image"
          />
          {this.toggleIndicatorBlue()}
        </div>
        <div id="viewSelector--pink" className="viewSelector" onClick={this.toggleFinshed}>
          <p className="viewSelector__name">Trash</p>
          <img
            src={trashView}
            alt="oneView"
            className="viewSelector__image"
          />
          {this.toggleIndicatorPink()}
        </div>
        <Calendar />
      </aside>
    );
  }
}

export default Aside;
