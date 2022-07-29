const mongoose = require('mongoose')
require('dotenv').config()

// let MONGODB_URI = "mongodb://127.0.0.1:27017/wineAndDineDatabase";
let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : "mongodb://127.0.0.1:27017/wineAndDineDatabase";

mongoose
  // .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .connect(dbUrl)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection Error", e.message);
  });
mongoose.set('debug', true)
const db = mongoose.connection;

module.exports = db;