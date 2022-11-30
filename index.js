const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const taskroutes = require("./router/routes");
dotenv.config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
mongoose.connect(process.env.MONGDB_URL, () => {
  console.log("Mongoose connected");
});
app.get("/", (req, res) => {
  res.send("Ok");
});
app.use("/v1/tasks", taskroutes);
app.listen(3000, () => console.log("Server connected"));
