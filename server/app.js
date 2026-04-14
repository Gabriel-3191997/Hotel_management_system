const express = require("express");
const dbRouter = require("./routes/database");
const port = 8080;
const app = express();

// connect to database
app.use("/", dbRouter);

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password@123",
//   database: "hotels",
// });

app
  .get("/home", (req, res) => {
    res.send("hello,world");
  })

  .listen(port, (err) => {
    if (!err) {
      console.log(`server is running on port ${port}`);
    } else {
      console.log(`server crash at ${port}`);
    }
  });
