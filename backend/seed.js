const mongoose = require("mongoose");
const Quotes = require("./models/Quote");

let dummyQuotes = [
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

async function seedDb() {
  Quotes.insertMany(dummyQuotes);
  console.log("Db seeded");
}

module.exports = seedDb;
