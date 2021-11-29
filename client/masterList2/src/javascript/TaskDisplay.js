import React from "react";
import "../css/index.css";
import TaskDisplayDay from "./TaskDisplayDay";
import addButton from "../images/addButton.svg";

class TaskDisplay extends React.Component {
  renderAddTask() {
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
              <input type="text" name="taskName"></input>
            </div>
            <div className="addTaskDisplay__formFlexField">
              <label className="addTaskDisplay__formFlexDate" htmlFor="date">
                Date
              </label>
              <select name="month">
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
              <select name="day">
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
                placeholder="YYYY"
              ></input>
            </div>
            <div className="addTaskDisplay__submitButton">
              <p>ADD</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="taskDisplay">
        {this.renderAddTask()}
        <TaskDisplayDay />
        <div className="addButton">
          <img id="add" alt="addButton" src={addButton}></img>
        </div>
      </div>
    );
  }
}

export default TaskDisplay;
