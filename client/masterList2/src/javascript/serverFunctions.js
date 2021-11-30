import axios from "axios";

function sendTaskToServer(task, dateObject) {
  axios //axios api post (takes url and object of data)
    .post("http://localhost:3301/api/insert", {
      task: task,
      month: dateObject.month,
      day: dateObject.day,
      year: dateObject.year,
    });

  axios.get("http://localhost:3301/api/get").then((response) => {
    //retrives data from api
    console.log(response.data);
  });
}

export { sendTaskToServer };
