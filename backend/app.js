const express = require("express");
const app = express();

const mongoose = require("mongoose");

var cors = require("cors");
app.use(cors());
// app.use(cors({ origin: ["http://localhost:8080"] }));

const seedDB = require("./seed");

const quotesRoute = require("./apis/quoteRoutes");

mongoose
  .connect("mongodb://127.0.0.1:27017/QuotesApp")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Not Connected", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

// seedDB();
app.use(quotesRoute);

const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port " + PORT));
