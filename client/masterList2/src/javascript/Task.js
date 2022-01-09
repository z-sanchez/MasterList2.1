import React from "react";
import "../css/index.css";
import doneMarker from "../images/doneMarker.svg";
import doneMarkerComplete from "../images/doneMarkerComplete.svg";
import { sendTaskToServerDeleted, sendTaskToServer, removeTaskFromDeleted } from "./serverFunctions";
import { DateContext } from "../javascript/context";

class Task extends React.Component {
  static contextType = DateContext;

  constructor(props) {
    super(props);
  }

  handleHover(image) {
    image.target.src = doneMarkerComplete;
  }

  handleNoHover(image) {
    image.target.src = doneMarker;
  }

  deleteTask = () => {
    let task = {
      // eslint-disable-next-line react/prop-types
      task: this.props.name,
      // eslint-disable-next-line react/prop-types
      month: this.props.date.month,
      // eslint-disable-next-line react/prop-types
      day: this.props.date.day,
      // eslint-disable-next-line react/prop-types
      year: this.props.date.year
    };
    sendTaskToServerDeleted(task);
    // eslint-disable-next-line react/prop-types
    this.props.taskDeleted(task);
  };

  addTask = () => {
    let task = {
      // eslint-disable-next-line react/prop-types
      task: this.props.name,
      // eslint-disable-next-line react/prop-types
      month: this.props.date.month,
      // eslint-disable-next-line react/prop-types
      day: this.props.date.day,
      // eslint-disable-next-line react/prop-types
      year: this.props.date.year
    };
    sendTaskToServer(task);
    removeTaskFromDeleted(task);
    // eslint-disable-next-line react/prop-types
    this.props.taskDeleted(task);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    if (this.context.viewMode === "finished") {
      // eslint-disable-next-line react/prop-types
      return (<div className="task" id={this.props.name.replace(/\s/g, '')}>
        <img
          className="task__doneMarker--incomplete"
          src={doneMarkerComplete}
          onMouseEnter={(e) => this.handleNoHover(e)}
          onMouseLeave={(e) => {
            this.handleHover(e);
          }}
          onClick={this.addTask}
          alt={"task"}
        />
        {/* eslint-disable-next-line react/prop-types */}
        <p className="task__description">{this.props.name}</p>
      </div>);
    }
    else if (this.context.viewMode === "oneDay") {
      // eslint-disable-next-line react/prop-types
      return (<div className="task" id={this.props.name.replace(/\s/g, '')}>
        <img
          className="task__doneMarker--incomplete"
          src={doneMarker}
          onMouseEnter={(e) => this.handleHover(e)}
          onMouseLeave={(e) => {
            this.handleNoHover(e);
          }}
          onClick={this.deleteTask}
          alt={"task"}
        />
        {/* eslint-disable-next-line react/prop-types */}
        <p className="task__description">{this.props.name}</p>
      </div>);
    }
    else {
      // eslint-disable-next-line react/prop-types
      return (<div className="task--all" id={this.props.name.replace(/\s/g, '')}>
        <img
          className="task__doneMarker--incomplete"
          src={doneMarker}
          onMouseEnter={(e) => this.handleHover(e)}
          onMouseLeave={(e) => {
            this.handleNoHover(e);
          }}
          onClick={this.deleteTask}
          alt={"task"}
        />
        {/* eslint-disable-next-line react/prop-types */}
        <p className="task__description--all">{this.props.name}</p>
      </div>);
    }
  }
}

export default Task;
