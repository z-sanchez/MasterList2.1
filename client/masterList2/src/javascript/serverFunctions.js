import axios from "axios";

function sendTaskToServer(task) {
  axios //axios api post (takes url and object of data)
    .post("http://localhost:3301/api/insert", {
      task: task.task, month: task.month, day: task.day, year: task.year
    });
}

const getTasksFromServer = new Promise((resolve, reject) => {

  let response = axios.get("http://localhost:3301/api/get");

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




export { sendTaskToServer, getTasksFromServer, closeAddTask };

