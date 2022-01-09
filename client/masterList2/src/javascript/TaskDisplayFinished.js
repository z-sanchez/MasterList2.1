import React from "react";
import "../css/index.css";
import TaskDisplayDay from "./TaskDisplayDay";
import { getFinishedTasksFromServer } from "./serverFunctions";



class TaskDisplayFinished extends React.Component {

  constructor(props) {
    super(props);
    this.updateTasks = this.updateTasks.bind(this);
    this.state = { data: null,
    };
  }

  componentDidMount() { //when component mounts, fetch all relevant data so you don't fetch every update
    getFinishedTasksFromServer.then((response) => {
      let data = response.data;
      if (data.length === 0) {
        throw "no data";
      }
      return data;
    }).then((data) => {
      console.log(data);
      this.setState({
        data: data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  renderDays() {
    let tasks = this.state.data, dayCodes = [],  taskObjects = [null], days = [];

    if (tasks == null) return null;

    tasks.map((task, index) => { //creates dayCodes for days to match to and creates objects for sorting
      let dayCode = new Date (task.month + "-" + task.day + "-" + task.year);
      taskObjects[index] = { dayCode: dayCode, taskData: task };

      for (let i = 0; i < dayCodes.length; ++i) {
        if (dayCode.getTime() === dayCodes[i].getTime()) {
          return;
        }
      }

      dayCodes.push(dayCode);
    });


    dayCodes = dayCodes.slice().sort((a,b) => {
      return a - b;
    });


    dayCodes.map((code, index) => {
      days[index] = {dayCode: code, taskDayComponent: []};
    });


    //////ORGANIZE DATES HERE (NOTES IN NOTEBOOK)


    taskObjects.map((object) => {
      for (let i = 0; i < days.length; ++i) {
        if (object.dayCode.getTime() === days[i].dayCode.getTime()) {
          days[i].taskDayComponent.push(object);
        }
      }
    });


    days.map((day, index) => {
      let tasks = [null],
        date = null;

      for (let i = 0; i < day.taskDayComponent.length; ++i) {
        let task = day.taskDayComponent[i].taskData.task;
        tasks[i] = task;
      }
      date = {
        month: day.taskDayComponent[0].taskData.month,
        day: day.taskDayComponent[0].taskData.day,
        year: day.taskDayComponent[0].taskData.year,
      }

      days[index] = (<TaskDisplayDay updateTasks={this.updateTasks} date={date} tasks={tasks} key={index}/>);
    });


    return days;
  }

  updateTasks = (task) => {
    var tasks = this.state.data

    for (let i = 0; i < tasks.length; ++i) {
      if (tasks[i].task === task.task) { //on updates after deletes, only matches names not instance of object
        tasks.splice(i, 1);
        break;
      }
    }

    this.setState({
      data: tasks,
    });
  }

  render() {
    return (<div id="taskDisplay">
      {this.renderDays()}
    </div>);
  }
}

export default TaskDisplayFinished;


