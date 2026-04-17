/* eslint-disable no-undef */
// parse booking entries as data
const express = require("express");
const mysql = require("mysql");
const router = express.Router();

router.post("/bookings", (req) => {
  // Parse bookings from frontend
  const availability = req.body.Availability || req.body.Availibility || null;
  const {
    Departure = null,
    Rooms = null,
    Suites = null,
    Adult = null,
    Children = null,
    Payment = null,
  } = req.body;

  // Create a local connection (keeps changes minimal and avoids modifying other files)
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password@123",
    database: "hotels",
  });

  const sql =
    "INSERT INTO bookings (Availability, Departure, Rooms, Suites, Adult, Children, Payment) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    availability,
    Departure,
    Rooms,
    Suites,
    Adult,
    Children,
    Payment,
  ];

  con.query(sql, values, (err) => {
    if (err) {
      console.error("Error inserting booking");
      return;
    }
    console.log("Booking inserted");
  });
});

module.exports = router;
