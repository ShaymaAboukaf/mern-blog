const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.log(err));
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoute);
