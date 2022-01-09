import axios from "axios";

const getTasksFromServer = new Promise((resolve, reject) => {
  let response = axios.get("http://localhost:3301/api/get");

  if (response.data === 0) {
    reject("no data");
  }
  else {
    resolve(response);
  }
});

const getFinishedTasksFromServer = new Promise((resolve, reject) => {
  let response = axios.get("http://localhost:3301/api/getFinished");

  if (response.data === 0) {
    reject("no data");
  }
  else {
    resolve(response);
  }
});


function closeAddTask(task) {
   return new Promise ((resolve, reject) => {
    if(task) {
      sendTaskToServer(task);
      resolve("task sent to Server");
    }
    else {
      reject("Error: task not sent to server")
    }
  })
}

function sendTaskToServer(task) {
  axios //axios api post (takes url and object of data)
    .post("http://localhost:3301/api/insert", {
      task: task.task, month: task.month, day: task.day, year: task.year
    });
}

function removeTaskFromDeleted(task) {
  axios //axios api post (takes url and object of data)
    .post("http://localhost:3301/api/remove", {
      task: task.task, month: task.month, day: task.day, year: task.year
    });
}

function sendTaskToServerDeleted(task) {
  axios //axios api post (takes url and object of data)
    .post("http://localhost:3301/api/insertDeleted", {
      task: task.task, month: task.month, day: task.day, year: task.year
    });
}


//delete task from finished and move to todolist



export { sendTaskToServer, removeTaskFromDeleted, getTasksFromServer, getFinishedTasksFromServer, closeAddTask, sendTaskToServerDeleted };

