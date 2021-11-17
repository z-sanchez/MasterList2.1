import React from "react";
import { DateContext } from "../javascript/context";
import { printHeaderDate, findFirstOfMonth } from "./dateFormatting";
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
        if (
          nodeDates[dateCounter + 1] == this.state.currentDay.date.day &&
          firstRendered == false
        ) {
          //if the 1st of month is found
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point--currentDay">
              {nodeDates[++dateCounter]}
            </p>
          );
        } else if (nodeDates[dateCounter + 1] == 1 && firstRendered == true) {
          //if first of the next month is found
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point-notCurrent">
              {nodeDates[++dateCounter]}
            </p>
          );
          lastRendered = true;
        } else if (lastRendered == true)
          //if the 1st of the next month has already been found
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point-notCurrent">
              {nodeDates[++dateCounter]}
            </p>
          );
        else if (firstRendered == false) {
          //if the 1st of month has yet to start
          renderNode = (
            <p className="calendarGrid__point calendarGrid__point-notCurrent">
              {nodeDates[++dateCounter]}
            </p>
          );
        } else {
          renderNode = (
            <p className="calendarGrid__point">{nodeDates[++dateCounter]}</p>
          );
        }
        row[j] = renderNode;
      }
      newRows[i] = ( //moves gathered rows into newRows
        <div className="calendarGrid__week">
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
        <div id="calendarHeader" className="calendarHeader--background">
          <p id="calendarHeader__date">
            {printHeaderDate(
              this.state.currentDay.date.month,
              this.state.currentDay.date.year
            )}
          </p>
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
