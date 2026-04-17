/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password@123",
  database: "hotels",
});

// establish connection and log any errors
con.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("MySQL connected (users route)");
  }
});

// manages user credentials

// sign up route
const bcrypt = require("bcryptjs");

router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // ensure table exists
  const sql = `CREATE TABLE IF NOT EXISTS user_credentials (
    
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
      )`;

  con.query(sql, (err) => {
    if (err) {
      console.log("connected");
    }

    // hash password
    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(password, salt);

    const sql =
      "INSERT INTO user_credentials (username, email, password) VALUES (?, ?, ?)";

    con.query(sql, [username, email, hashed], (err) => {
      if (err) {
        console.error("connected");
        // duplicate email
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).json({ error: "Email already registered" });
        }
        return res.status(500).json({ error: "Database error" });
      }
    });
  });
});

// login route

router.get("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
