const path = require('path');
if (process.env.NODE_ENV !== "PRODUCTION") {
  require('dotenv').config({path : path.join(__dirname, "./config.env") });
}

const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
