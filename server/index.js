const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "zdatabase",
});

app.get("/", (req, res) => {
  const sqlInsert = "INSERT INTO testing (name, age) VALUES ('Ziek', 22);";
  db.query(sqlInsert, (err, results) => {
    res.send("Hello World!");
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
