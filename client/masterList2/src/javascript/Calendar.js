import React from "react";
import { DateContext } from "../javascript/context";
import calendarArrowUp from "../images/calendarArrowDown.svg";
import calendarArrowDown from "../images/calendarArrowUp.svg";
import "../css/index.css";

class Calendar extends React.Component {
  static contextType = DateContext;

  constructor(props) {
    super(props);
    this.state = {
      dateObject: new Date()
    };
  }

  componentDidMount() {
    //let contextData = this.context; //grab context data with this line
    const date = new Date();
    this.setState({
      dateObject: date
    });
  }

  getMonthAndYear() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[this.state.dateObject.getMonth()] + " " + this.state.dateObject.getFullYear();
  }

  fillCalendar(current) {
    let newRows = [],
      today = new Date(),
      currentDate = current,
      lastOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() + 1,
      lastOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
      weekDayOfFirst = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    for (let i = 0; i < weekDayOfFirst.getDay() - 1; i++) {
      newRows[i] = (
        <p className="calendarGrid__point calendarGrid__point-notCurrent"
           onClick={() => this.handleCalendarClick(i + 1)} key={i}> {--lastOfPrevMonth}
        </p>);
    }
    newRows = newRows.reverse();

    for (let i = 0; i <= lastOfCurrentMonth - 1; i++) {
      let newNode = null;

      if (i === today.getDate() - 1 && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
        newNode = (<p className="calendarGrid__point calendarGrid__point--currentDay"
                      onClick={() => this.handleCalendarClick(i + 1)} key={i + 55}>{i + 1}</p>);
      } else {
        newNode = (
          <p className="calendarGrid__point" onClick={() => this.handleCalendarClick(i + 1)} key={i + 55}>{i + 1} </p>);
      }
      newRows.push(newNode);
    }

    for (let i = 0; newRows.length < 35; i++) {
      let newNode = (<p className="calendarGrid__point calendarGrid__point-notCurrent"
                        onClick={() => this.handleCalendarClick(i + 1)} key={i + 110}>{i + 1}</p>);
      newRows.push(newNode);
    }

    return newRows;
  }

  handleCalendarClick(date) {
    let target = (this.state.dateObject.getMonth() + 1) + "/" + date + "/" + this.state.dateObject.getFullYear();
    let element = document.getElementById(target);
    if (element !== null) element.scrollIntoView({behavior: 'smooth'});
  }

  previousMonth = () => {
    let newDate = this.state.dateObject;
    newDate.setMonth(newDate.getMonth() - 1);
    this.setState({
      dateObject: newDate
    });
  };

  nextMonth = () => {
    let newDate = this.state.dateObject;
    newDate.setMonth(newDate.getMonth() + 1);
    this.setState({
      dateObject: newDate
    });
  };

  render() {
    return (
      <div id="calendar">
        <div id="calendarHeader">
          <p id="calendarHeader__date" className="calendarHeader--background">
            {this.getMonthAndYear()}
          </p>
          <div id="calendarHeader__arrow--flex">
            <img className="calendarHeader__arrow" src={calendarArrowUp} onClick={this.previousMonth} alt={"arrowUp"} />
            <img className="calendarHeader__arrow" src={calendarArrowDown} onClick={this.nextMonth} alt={"arrowDown"} />
          </div>
        </div>
        <div id="calendarGrid">
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
          {this.fillCalendar(this.state.dateObject)}
        </div>
      </div>
    );
  }
}

export default Calendar;

