const express = require("express");
const mysql = require("mysql");
const port = 8080;
const app = express();

// connect to database

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password@123",
});

app
  .get("/home", (req, res) => {
    res.send("hello,world");

    con.connect(function (err) {
      if (err) console.log("Connected!");
    });
  })

  .listen(port, (err) => {
    if (!err) {
      console.log(`server is running on port ${port}`);
    } else {
      console.log(`server crash at ${port}`);
    }
  });
