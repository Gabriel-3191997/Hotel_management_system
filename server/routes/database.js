/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");

const router = express.Router();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password@123",
  database: "hotels",
});

router.get("/database", (req, res) => {
  con.connect(function (err) {
    if (err) console.log("Connected!");

    // const sql =
    //   "CREATE TABLE IF NOT EXISTS bookings ( Customers VARCHAR(255), Email VARCHAR(255), Hotel VARCHAR(255), Availability VARCHAR(255), Departure VARCHAR(255), Rooms VARCHAR(255), Suites VARCHAR(255), Adult VARCHAR(255), Children VARCHAR(255), Payment VARCHAR(255))";

    // con.query(sql, function (err) {
    //   if (err) {
    //     console.error("Error creating table:", err);
    //     res.status(500).send("Table creation failed");
    //     return;
    //   }
    //   console.log("Table created successfully");
    //   res.send("Database connected and table created");
    // });
    res.send("database connected");
  });
});

// eslint-disable-next-line no-undef
module.exports = router;
