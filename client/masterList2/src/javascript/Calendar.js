import React from "react";
import { DateContext } from "../javascript/context";
import { printHeaderDate, findFirstOfMonth } from "./dateFormatting";
import calendarArrowUp from "../images/calendarArrowDown.svg";
import calendarArrowDown from "../images/calendarArrowUp.svg";
import "../css/index.css";

class Calendar extends React.Component {
  static contextType = DateContext;
  constructor(props) {
    super(props);
    this.state = {
      currentDay: {
        date: { month: "Month", day: 0, year: 0 },
        dayOfWeek: "weekday",
      },
      years: [null],
    };
  }

  componentDidMount() {
    let contextData = this.context;
    console.log(contextData.currentDay.date);
    console.log(contextData.currentDay.dayOfWeek);
    this.setState({
      currentDay: {
        date: contextData.currentDay.date,
        dayOfWeek: contextData.currentDay.dayOfWeek,
      },
      years: contextData.year,
    });
  }

  fillCalendar() {
    let newRows = [null], //where rows to be rendered will be stored
      weekdays = [
        //used for finding how many days before day one of month need to be rendered
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      startOfMonth = findFirstOfMonth(
        this.state.currentDay.dayOfWeek,
        this.state.currentDay.date.day
      ), //sets the weekday name for the start of the month
      nodeDates = [], //this array will carry the values to be shown on each calendar node
      prevDateNode = null,
      nextDateNode = null,
      dateCounter = -1;

    let daysBeforeMonth = weekdays.indexOf(startOfMonth); //finds days before month starts that need to be rendered
    let startOfMonthNode = getDateNode(
      this.state.years[0],
      this.state.currentDay.date.month - 1,
      0
    ); //returns actual date node

    prevDateNode = startOfMonthNode;

    //loops through days before 1st of month to find their day values
    for (let i = 0; i < daysBeforeMonth; ++i) {
      nodeDates[i] = prevDateNode.prevDay.date.day;
      prevDateNode = prevDateNode.prevDay;
    }

    nodeDates = nodeDates.reverse(); //reverses nodeDates so dates gathered so far read in correct order
    nextDateNode = startOfMonthNode;

    //finds all the next days day values
    for (let i = nodeDates.length; i < 42; ++i) {
      if (nextDateNode == undefined) break;
      nodeDates[i] = nextDateNode.date.day;
      nextDateNode = nextDateNode.nextDay;
    }

    let firstRendered = false,
      lastRendered = false;

    //loops to gather 6 calendar rows
    for (let i = 0; i < 6; ++i) {
      let row = [null];
      for (let j = 0; j < 7; ++j) {
        //grabs an entire week
        let renderNode = null;

        if (firstRendered == false && nodeDates[dateCounter + 1] != 1) { //if the first of month hasn't been reached and date doesn't equal first
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point-notCurrent" key={j}>
              {nodeDates[++dateCounter]}
            </p>
          );
        } else if (
          nodeDates[dateCounter + 1] == 1 &&
          nodeDates[dateCounter + 1] == this.state.currentDay.date.day &&
          firstRendered == false
        ) { //if date is 1st of a month and date is today's date and first hasn't been rendered
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point--currentDay" key={j}>
              {nodeDates[++dateCounter]}
            </p>
          );
          firstRendered = true;
        } else if (nodeDates[dateCounter + 1] == 1 && firstRendered == false) { //if date is 1st and first hasn't been rendered
          renderNode = (
            <p className="calendarGrid__point" key={j}>{nodeDates[++dateCounter]}</p>
          );
          firstRendered = true;
        } else if (nodeDates[dateCounter + 1] == 1 && firstRendered == true) { //if first of month comes up after first has already been rendered before
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point-notCurrent" key={j}>
              {nodeDates[++dateCounter]}
            </p>
          );
          lastRendered = true;
        } else if (
          lastRendered == false &&
          firstRendered == true &&
          nodeDates[dateCounter + 1] == this.state.currentDay.date.day
        ) { //if last of month hasn't been rendered, and the first of the month has been rendered, and it is the current day
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point--currentDay" key={j}>
              {nodeDates[++dateCounter]}
            </p>
          );
        } else if (lastRendered == false && firstRendered == true) { //if last of month hasn't been rendered and first has
          renderNode = (
            <p className="calendarGrid__point" key={j}>
              {nodeDates[++dateCounter]}
            </p>
          );
        } else if (lastRendered == true) { //if last has been rendered 
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point-notCurrent" key={j}>
              {nodeDates[++dateCounter]}
            </p>
          );
        }

        row[j] = renderNode;
      }
      newRows[i] = ( //moves gathered rows into newRows
        <div className="calendarGrid__week" key={i}>
          {row.filter((e) => {
            return e;
          })}
        </div>
      );
    }
    return newRows;
  }

  render() {
    return (
      <div id="calendar">
        <div id="calendarHeader">
          <p id="calendarHeader__date" className="calendarHeader--background">
            {printHeaderDate(
              this.state.currentDay.date.month,
              this.state.currentDay.date.year
            )}
          </p>
          <img className="calendarHeader__arrow" src={calendarArrowUp}></img>
          <img className="calendarHeader__arrow" src={calendarArrowDown}></img>
        </div>
        <div id="calendarGrid">
          <div id="weekHeadings">
            <p
              className="calendarGrid__point calendarGrid__point--weekHeading"
              id="monday"
            >
              M
            </p>
            <p
              className="calendarGrid__point calendarGrid__point--weekHeading"
              id="monday"
            >
              T
            </p>
            <p
              className="calendarGrid__point calendarGrid__point--weekHeading"
              id="monday"
            >
              W
            </p>
            <p
              className="calendarGrid__point calendarGrid__point--weekHeading"
              id="monday"
            >
              T
            </p>
            <p
              className="calendarGrid__point calendarGrid__point--weekHeading"
              id="monday"
            >
              F
            </p>
            <p
              className="calendarGrid__point calendarGrid__point--weekHeading"
              id="monday"
            >
              S
            </p>
            <p
              className="calendarGrid__point calendarGrid__point--weekHeading"
              id="monday"
            >
              S
            </p>
          </div>
          {this.fillCalendar()}
        </div>
      </div>
    );
  }
}

export default Calendar;

function getDateNode(yearArray, month, day) {
  if (yearArray == null) return;
  let node = yearArray.monthArray[month].dayArray[day];
  return node;
}
