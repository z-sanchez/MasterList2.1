import React from "react";
import "../css/index.css";
import Header from "./Header";
import Aside from "./Aside";
import ScrollBar from "./ScrollBar";
import { createYear } from "./createCalendar";
import { findDayOfWeekday } from "../javascript/dateFormatting";
import { DateContext } from "../javascript/context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [createYear(2021)], currentDay: {
        date: getCurrentDay(), dayOfWeek: findDayOfWeekday(getWeekday())
      },
      viewMode: "oneDay",
      toggleViewMode: this.toggleViewMode,
    };
  }

  toggleViewMode = (view) => {
    this.setState({
      viewMode: view,
    })
  }


  render() {
    let contextData = {
      currentDay: this.state.currentDay, year: this.state.years, viewMode: this.state.viewMode, toggleViewMode: this.state.toggleViewMode,
    };

    return (<div id="appWrapper">
      <Header />
      <DateContext.Provider value={contextData}>
        <Aside />
        <ScrollBar/>
      </DateContext.Provider>
    </div>);
  }
}

export default App;

/* Need to move the functions sometime */

//returns object containing tradional numbers for for months and days (ex. Nov = 11)
function getCurrentDay() {
  const date = new Date();
  return {
    month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear()
  };
}

//returns weekday number (ex. monday = 1)
function getWeekday() {
  const date = new Date();
  return date.getDay();
}

/*

Next Tasks: 

Note: Probably need to have consistency with month indexing and day indexing (does 0 = Jan or null)
NOte: Keep front end code to react, back end seperate JS files

Build functioning calendar visual:
- add event listener for jumping to date on task list

Cosmestic changes:
- Fix scrollbar

Day View Selectors
- Write it into back end code for Aside functions 


Weather and Time module:
- Find APIs and makes code

Other:
- add comments

*/
