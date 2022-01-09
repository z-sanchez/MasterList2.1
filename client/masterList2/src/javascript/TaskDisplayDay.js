import React from "react";
import "../css/index.css";
import Task from "./Task";
import { DateContext } from "../javascript/context";

class TaskDisplayDay extends React.Component {

  static contextType = DateContext;

  constructor(props) {
    super(props);
    this.taskDeleted = this.taskDeleted.bind(this);
    this.state = {
      // eslint-disable-next-line react/prop-types
      tasks: this.props.tasks, // eslint-disable-next-line react/prop-types
      date: this.props.date,
    };
  }

  taskDeleted = (task) => {
    // eslint-disable-next-line react/prop-types
    this.props.updateTasks(task);
  }


  renderTask() {
    let tasks = [null];

    for (let i = 0; i < this.state.tasks.length; ++i) {
      tasks[i] = (<Task name={this.state.tasks[i]} date={this.state.date} taskDeleted={this.taskDeleted} key={i + 1} />);
    }

    return tasks;
  }

  weekday() {
    let dateString = "";
    if (this.state.date.month.length === 1) {
      dateString = dateString.concat("0");
    }

    dateString = dateString.concat(this.state.date.month + "/");

    if (this.state.date.day.length === 1) {
      dateString = dateString.concat("0");
    }

    dateString = dateString.concat(this.state.date.day + "/");
    dateString = dateString.concat(this.state.date.year);

    return new Date(dateString).toLocaleString("en-us", { weekday: "long" });
  }

  updateDays = () => {
    // eslint-disable-next-line react/prop-types
    if (this.state.tasks.length < this.props.tasks.length || this.state.date !== this.props.date) {
      this.setState({
        // eslint-disable-next-line react/prop-types
        tasks: this.props.tasks, // eslint-disable-next-line react/prop-types
        date: this.props.date
      });
    }
  };

  componentDidUpdate() {
    this.updateDays();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    if (this.context.viewMode === "oneDay" || this.context.viewMode === "finished") {
      return (<div className="taskDisplayDay"
                   id={this.state.date.month + "/" + this.state.date.day + "/" + this.state.date.year}>
        <div className="taskDisplayDay__nameDateContainer">
          <p className="taskDisplayDay__day">{this.weekday()}</p>
          <p
            className="taskDisplayDay__date">{this.state.date.month + "/" + this.state.date.day + "/" + this.state.date.year}</p>
        </div>
        <div className="taskDisplayDay__taskRow">
          {this.renderTask()}
        </div>
      </div>);
    }
    else {
      return (<div className="taskDisplayDay--all"
                   id={this.state.date.month + "/" + this.state.date.day + "/" + this.state.date.year}>
        <div className="taskDisplayDay__nameDateContainer--all">
          <p className="taskDisplayDay__day--all">{this.weekday()}</p>
          <p
            className="taskDisplayDay__date--all">{this.state.date.month + "/" + this.state.date.day + "/" + this.state.date.year}</p>
        </div>
        <div className="taskDisplayDay__taskRow--all">
          {this.renderTask()}
        </div>
      </div>);
    }
  }
}

export default TaskDisplayDay;
