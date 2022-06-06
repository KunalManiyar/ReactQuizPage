const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/QuizPage").then((data) => {
    console.log(`MongoDB connected with server: ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
