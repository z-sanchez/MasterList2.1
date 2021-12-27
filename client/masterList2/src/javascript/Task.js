import React from "react";
import "../css/index.css";
import doneMarker from "../images/doneMarker.svg";
import doneMarkerComplete from "../images/doneMarkerComplete.svg";
import { sendTaskToServerDeleted } from "./serverFunctions";

class Task extends React.Component {

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

  render() {
      return (<div className="task">
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
}

export default Task;
