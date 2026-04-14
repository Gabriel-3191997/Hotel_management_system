const express = require("express");
const mysql = require("mysql");
const port = 8080;
const app = express();

// connect to database

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password@123",
  database: "hotels",
});

app
  .get("/home", (req, res) => {
    res.send("hello,world");

    con.connect(function (err) {
      if (err) console.log("Connected!");

      // const sql =
      //   "CREATE TABLE IF NOT EXISTS user_credentials (username VARCHAR(255),email VARCHAR(255),password VARCHAR(255))";
      // const sql =
      //   "CREATE TABLE IF NOT EXISTS hotels ( Hotel VARCHAR(255), Location VARCHAR(255), Email VARCHAR(255), Phone VARCHAR(255), Price VARCHAR(255))";

      const sql =
        "CREATE TABLE IF NOT EXISTS bookings  ( Customers VARCHAR(255), Email VARCHAR(255), Hotel VARCHAR(255), Availability VARCHAR(255), Departure VARCHAR(255), Rooms VARCHAR(255), Suites VARCHAR(255), Adult VARCHAR(255), Children VARCHAR(255), Payment VARCHAR(255))";

      con.query(sql, function (err) {
        if (err) console.log("table created");
      });
    });
  })

  .listen(port, (err) => {
    if (!err) {
      console.log(`server is running on port ${port}`);
    } else {
      console.log(`server crash at ${port}`);
    }
  });
