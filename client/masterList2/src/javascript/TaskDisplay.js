import React from "react";
import "../css/index.css";
import TaskDisplayDay from "./TaskDisplayDay";
import addButton from "../images/addButton.svg";

class TaskDisplay extends React.Component {
  render() {
    return (
      <div id="taskDisplay">
        <TaskDisplayDay />
        <div className="addButton">
          <img id="add" alt="addButton" src={addButton}></img>
        </div>
      </div>
    );
  }
}

export default TaskDisplay;
