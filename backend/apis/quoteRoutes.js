// const express = require("express").Router();

const express = require("express");
const router = express.Router();

const Quotes = require("../models/Quote");

router.get("/allQuotes", async (req, res) => {
  try {
    let allQuotes = await Quotes.find({});
    res.status(200).json(allQuotes);
  } catch (error) {
    res.status(400).json({ msg: "something went worng" });
  }
});

router.post("/addQuotes", async (req, res) => {
  try {
    const { author, text } = req.body;
    await Quotes.create({ author, text });
    res.status(200).json({ msg: "New Quote Created Succcessfully" });
  } catch (error) {
    res.status(400).json({ msg: "something went worng" });
  }
});

router.get("/quotes/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let foundQuote = await Quotes.findById(id);
    console.log(foundQuote, "foundQuote");
    res.status(200).json(foundQuote);
  } catch (error) {
    console.log("Nhi mila quote", error);
  }
});

router.delete("/quotes/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Quotes.findByIdAndDelete(id);
    res.status(201).json({ msg: "Quote deleted successfully" });
  } catch (e) {
    res.status(400).json({ msg: "something went wrong" });
  }
});

module.exports = router;
