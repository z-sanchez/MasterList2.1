const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "node",
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("You are now connected...");
// });

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO tabletable (name, username, password) VALUES ('Ziek', 'bruhdot777', '50519')";
  db.query(sqlInsert, (err, results) => {
    res.send("Hello World!");
  });
});

app.listen(3301, () => {
  console.log("running on port 3301");
});
