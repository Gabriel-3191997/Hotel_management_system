/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql2");

const router = express.Router();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password@123",
  database: "hotels",
});

const formatDate = (dateValue) => {
  if (!dateValue) return null;

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;

  return date.toISOString().slice(0, 10);
};

router.post("/bookings", (req, res) => {
  const {
    customer = null,
    Customers = null,
    email = null,
    Email = null,
    checkIn = null,
    Availability = null,
    checkOut = null,
    Departure = null,
    rooms = null,
    Rooms = null,
    suite = null,
    Suites = null,
    adult = null,
    Adult = null,
    children = null,
    Children = null,
    paymentNumber = null,
    Payment = null,
    hotelName = null,
    Hotels = null,
    amount = 0,
    Amount = null,
  } = req.body;

  const selectedHotel = hotelName || Hotels;

  if (!selectedHotel) {
    return res.status(400).json({ error: "Hotel name is required" });
  }

  const sql = `
    INSERT INTO bookings
    (Customers, Email, PhoneNumbers, Hotels, Amount, Availibilty, Departure, Rooms, Suites, Adult, Children, Payment)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    customer || Customers,
    email || Email,
    paymentNumber || Payment,
    selectedHotel,
    Amount || amount,
    formatDate(checkIn || Availability),
    formatDate(checkOut || Departure),
    rooms || Rooms,
    suite || Suites,
    adult || Adult,
    children || Children,
    paymentNumber || Payment,
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error(
        "Error inserting booking into existing bookings table:",
        err,
      );
      return res.status(500).json({
        success: false,
        error: "Database error",
        details: err.sqlMessage || err.message,
      });
    }

    if (!result) {
      return res.status(500).json({
        success: false,
        error: "Booking insert did not return a result",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Booking Successful",
      bookingId: result.insertId || null,
    });
  });
});

router.post("/hotel-click", (req, res) => {
  const { hotelName } = req.body;

  if (!hotelName) {
    return res.status(400).json({ error: "Hotel name is required" });
  }

  return res.status(200).json({
    success: true,
    message: "Hotel selected",
    hotelName,
  });
});

module.exports = router;
