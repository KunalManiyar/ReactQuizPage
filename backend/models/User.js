const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your name"],
    minlength: [4, "Name should have atleast 4 characters"],
    maxlength: [30, "Name can have atmost 30 aharacters"],
  },
  count: {
    type: Number,
    default: 0,
  },
  status: {
    type: Boolean,
    default: true,
  },
  expiryDate: {
    type: Number,
    default: new Date().getTime() + 24 * 60 * 60 * 1000,
  },
});

module.exports = mongoose.model("User", userSchema);
