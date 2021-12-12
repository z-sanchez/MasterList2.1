import React from "react";
import "../css/index.css";
import Task from "./Task";


class TaskDisplayDay extends React.Component {

  constructor(props) {
    super(props);
  }


  renderTask() {
    // eslint-disable-next-line react/prop-types
    if (this.props.data != null) {
    // eslint-disable-next-line react/prop-types
      let nameOfTask = this.props.data[this.props.data.length - 1].task;
      return (<Task name={nameOfTask} />)
    }
  }


  render() {
    // eslint-disable-next-line react/prop-types

    return (
      <div className="taskDisplayDay">
        <div className="taskDisplayDay__nameDateContainer">
          <p className="taskDisplayDay__day">Monday</p>
          <p className="taskDisplayDay__date">10/4</p>
        </div>
        <div className="taskDisplayDay__taskRow">
         {this.renderTask()}
        </div>
      </div>
    );
  }
}

export default TaskDisplayDay;
