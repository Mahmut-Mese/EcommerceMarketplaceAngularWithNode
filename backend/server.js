const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const config = require('./config');
const cors = require("cors");
app.use(cors("http://localhost:4200"));


mongoose.connect(config.database, (err) => {
  if (!err) console.log("mongo db connected good");
  else
    console.log("mongo db  not connected" + JSON.stringify(err, undefined, 2));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.get("/", (req, res, next) => {
    res.json({
      user: "mahmut",
    });
  });
app.listen(config.port, (err) => {
    console.log("magic happens on port " + config.port );
  });
  