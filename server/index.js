const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser"); //parses body for api data sent
const cors = require("cors"); //fixes errors with axios api sending stugg

app.use(cors()); //uses cors
app.use(express.json()); //uses express to interpret json data from api
app.use(bodyParser.urlencoded({ extended: true })); //body parser is used

const db = mysql.createConnection({ //creates connection
  host: "172.20.64.1",
  user: "newUser",
  password: "password",
  database: "node",
});

app.get("/api/get", (req, res) => { //api route to reach api from to get
  const sqlSelect = "SELECT * FROM tabletable"; 
  db.query(sqlSelect, (err, results) => { //gets all data from table
    res.send(results); //sends to api
  })
});

app.post("/api/insert", (req, res) => { //api route to reach api from
  const nameOfUser = req.body.nameOfUser; //grabs body data
  const username = req.body.username;
  const password = req.body.password;

  const sqlInsert = //sql insert
    "INSERT INTO tabletable (name, username, password) VALUES (?,?,?)";
  db.query(sqlInsert, [nameOfUser, username, password], (err, results) => {
    console.log(results);
  });
});

app.listen(3301, () => { //puts server at specific port
  console.log("running on port 3301");
});

db.connect(function (err) { //verfies connection
  if (err) throw err;
  console.log("You are now connected...");
});

//Troubles with connecting wsl to local network server (this changes!!!)
//had to retrieve local machine ip address and use that in code
//also had to create a new user in mysql adding one line at a time in Xammp
//works now!

//cat /etc/resolv.conf
