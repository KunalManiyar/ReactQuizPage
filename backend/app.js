const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();

//parse the incoming requests with JSON payloads
app.use(express.json());

//All Routes

app.use("/api/v1", userRoute);

module.exports = app;
