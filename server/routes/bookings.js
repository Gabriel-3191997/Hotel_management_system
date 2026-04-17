/* eslint-disable no-undef */
// parse booking entries as data
const express = require("express");
const mysql = require("mysql");
const router = express.Router();

router.post("/bookings", (req, res) => {
  const {
    Hotel = null,
    Customers = null,
    Email = null,
    Availability = null,
    Departure = null,
    Rooms = null,
    Suites = null,
    Adult = null,
    Children = null,
    PhoneNumber = null,
    AmountPaid = 0,
  } = req.body;

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password@123",
    database: "hotels",
  });

  const sql = `
    INSERT INTO bookings 
    (Hotel, Customers, Email, Availability, Departure, Rooms, Suites, Adult, Children, PhoneNumber, AmountPaid) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    Hotel,
    Customers,
    Email,
    Availability,
    Departure,
    Rooms,
    Suites,
    Adult,
    Children,
    PhoneNumber,
    AmountPaid,
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting booking", err);
      return res.status(500).json({ error: "Database error" });
    }

    return res.status(201).json({
      message: "Booking inserted successfully",
      bookingId: result.insertId,
    });
  });
});

module.exports = router;
