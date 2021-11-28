import React from "react";
import "../css/index.css";
import Header from "./Header";
import Aside from "./Aside";
import TaskDisplay from "./TaskDisplay";
import { createYear } from "./createCalendar";
import { findDayOfWeekday } from "../javascript/dateFormatting";
import { DateContext } from "../javascript/context";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [createYear(2021)],
      currentDay: {
        date: getCurrentDay(),
        dayOfWeek: findDayOfWeekday(getWeekday()),
      },
    };
  }

  render() {
    let contextData = {
      currentDay: this.state.currentDay,
      year: this.state.years,
    };

    axios //axios api post (takes url and object of data)
      .post("http://localhost:3301/api/insert", {
        nameOfUser: "cheese",
        username: "cheese",
        password: "cheese",
      });

    axios.get("http://localhost:3301/api/get").then((response) =>{ //retrives data from api
      console.log(response.data);
    });

    return (
      <div id="appWrapper">
        <Header />
        <DateContext.Provider value={contextData}>
          <Aside />
        </DateContext.Provider>
        <TaskDisplay />
      </div>
    );
  }
}

export default App;

/* Need to move the functions sometime */

//returns object containing tradional numbers for for months and days (ex. Nov = 11)
function getCurrentDay() {
  const date = new Date();
  return {
    month: date.getMonth() + 1,
    day: date.getDate(),
    year: date.getFullYear(),
  };
}

//returns weekday number (ex. monday = 0)
function getWeekday() {
  const date = new Date();
  return date.getDay();
}

/*

Next Tasks: 

Note: Probably need to have consistency with month indexing and day indexing (does 0 = Jan or null)
NOte: Keep front end code to react, back end seperate JS files

Build functioning calendar visual:
- Prepare for displaying two different years (back-end work with years. Create database)
- add arrows to navigate through months
- add event listener for jumping to date on task list

Cosmestic changes:
- Fix scrollbar

Day View Selectors
- Create css edits for different views
- Write it into back end code for Aside functions 

Add Task window:
- Create a form for add task window

Weather and Time module:
- Find APIs and makes code

Other:
- add comments

*/
