import React from "react";
import "../css/index.css";
import TaskDisplayDay from "./TaskDisplayDay";
import addButton from "../images/addButton.svg";
import { getTasksFromServer, sendTaskToServer } from "./serverFunctions";


class TaskDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      data: null,
    };
  }

  exitAddTask = () => {
    this.setState({
      adding: false,
    });

    while (document.querySelector(".clickAway") != undefined) {
      document.querySelector(".clickAway").remove(); //why does this class appear twice
    }
  };

  renderAddTask() {
    //creates clickAway div and adds to body so user can click out of addtaskwindow
    let clickAway = document.createElement("div");
    clickAway.classList.add("clickAway");
    clickAway.addEventListener("click", this.exitAddTask);
    document.querySelector("body").appendChild(clickAway);

    return (
      <div className="addTaskDisplayWrapper">
        <div className="addTaskDisplay">
          <div className="addTaskDisplay__title">
            <p>New Task</p>
          </div>
          <div className="addTaskDisplay__formFlex">
            <div className="addTaskDisplay__formFlexField">
              <label
                className="addTaskDisplay__formFlexTaskName"
                htmlFor="taskName"
              >
                Task Name
              </label>
              <input type="text" name="taskName" id="taskInput"></input>
            </div>
            <div className="addTaskDisplay__formFlexField">
              <label className="addTaskDisplay__formFlexDate" htmlFor="date">
                Date
              </label>
              <select name="month" id="monthInput">
                <option value="1">JAN</option>
                <option value="2">FEB</option>
                <option value="3">MAR</option>
                <option value="4">APR</option>
                <option value="5">MAY</option>
                <option value="6">JUN</option>
                <option value="7">JUL</option>
                <option value="8">AUG</option>
                <option value="9">SEP</option>
                <option value="10">OCT</option>
                <option value="11">NOV</option>
                <option value="12">DEC</option>
              </select>
              <select name="day" id="dayInput">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <input
                type="text"
                name="year"
                id="yearInput"
                maxLength="4"
                placeholder="YYYY"
              />
            </div>
            <div
              className="addTaskDisplay__submitButton"
              onClick={this.handleSubmitTask}
            >
              <p>ADD</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  addTaskWindow() {
    if (this.state.adding == true) return this.renderAddTask();
    else return;
  }

  addTaskWindowTrue = () => {
    this.setState({
      adding: true
    });
  };

  addTaskWindowFalse = () => {
    this.setState({
      adding: false
    });
  };

  handleSubmitTask = () => {
    let task = {task: null, month: null, day: null, year: null};

    task.task = document.querySelector("#taskInput").value;
    task.month = document.querySelector("#monthInput").value;
    task.day = document.querySelector("#dayInput").value;
    task.year = document.querySelector("#yearInput").value;

    sendTaskToServer(task);

    this.addTask(task);

    this.addTaskWindowFalse();
  };

  addTask = (taskObject) => {
    let array = this.state.data;

    
    if (array == null) {
      array = [taskObject];
    }
    else {
      array.push(taskObject);

    }

    this.setState({
      data: array,
    });
  }

  componentDidMount() {
    getTasksFromServer.then((response) => {
      let data = response.data;
      if (data.length === 0) {
        throw "no data";
      }
      return data;
    }).then((data) => {
      this.setState({
        data: data,
      })
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div id="taskDisplay">
        {this.addTaskWindow()}
        <TaskDisplayDay data={this.state.data} />
        <div className="addButton">
          <img
            id="add"
            alt="addButton"
            onClick={this.addTaskWindowTrue}
            src={addButton}
          />
        </div>
      </div>
    );
  }
}

export default TaskDisplay;
