const express = require("express");
const port = 8080;
const app = express();

app
  .get("/home", (req, res) => {
    res.send("hello,world!");
  })
  .listen(port, (err) => {
    if (!err) {
      console.log(`server is running on port ${port}`);
    } else {
      console.log(`server crash at ${port}`);
    }
  });
