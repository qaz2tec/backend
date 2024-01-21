const express = require("express");
require("dotenv").config();
const app = express(); //factory function
PORT = 4000; //65535 - no of ports
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/home", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is Started at Port : ${PORT}`);
});
