import React from "react";
import "../css/index.css";
import Task from "./Task";

class TaskDisplayDay extends React.Component {
  render() {
    return (
      <div className="taskDisplayDay">
        <div className="taskDisplayDay__nameDateContainer">
          <p className="taskDisplayDay__day">Monday</p>
          <p className="taskDisplayDay__date">10/4</p>
        </div>
        <div className="taskDisplayDay__taskRow">
          <Task />
        </div>
      </div>
    );
  }
}

export default TaskDisplayDay;
