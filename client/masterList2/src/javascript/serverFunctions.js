import axios from "axios";

function sendTaskToServer(task) {
  axios //axios api post (takes url and object of data)
    .post("http://localhost:3301/api/insert", {
      task: task.task, month: task.month, day: task.day, year: task.year
    });
}

// function getTasksFromServer() {
//   return axios.get("http://localhost:3301/api/get");
//
//   // then((response) => {
//   //   //retrives data from api
//   //   return response.data;
//   // });
// }

const getTasksFromServer = new Promise((resolve, reject) => {

  let response = axios.get("http://localhost:3301/api/get");

  if (response.data === 0) {
    reject("no data");
  }
  else {
    resolve(response);
  }
});

export { sendTaskToServer, getTasksFromServer };

