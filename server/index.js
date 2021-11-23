const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "192.168.96.1",
  user: "newUser",
  password: "password",
  database: "node",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO tabletable (name, username, password) VALUES ('Tyler', 'superTy', 'coochiecowboy')";
  db.query(sqlInsert, (err, results) => {
    res.send("Hello World!");
  });
});

app.listen(3301, () => {
  console.log("running on port 3301");
});

//Troubles with connecting wsl to local network server (this changes!!!)
//had to retrieve local machine ip address and use that in code
//also had to create a new user in mysql adding one line at a time in Xammp
//works now!


//cat /etc/resolv.conf