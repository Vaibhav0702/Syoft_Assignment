const mongoose = require("mongoose");

require('dotenv').config()
// ------------------------------------

const DB = process.env.DataBase;

const connect = () => {
  return mongoose.connect(DB);
};

module.exports = connect;
