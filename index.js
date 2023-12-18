const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5000;

// Hardcoded values
const MongoURI = "mongodb+srv://shwetasdhake16:shwetasdhake16@cluster0.c9dylvi.mongodb.net/ML_Token?retryWrites=true&w=majority";

// Connect to MongoDB
// Connect to MongoDB
const connect = () => {
  mongoose
    .connect(MongoURI)
    .then(() => {
      console.log("Connected to Database successfully on " + MongoURI);
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1); // Exit the process on connection failure
    });
};


// Routes
const Route = require("./routes/token-route.js");
app.use("/api/", Route);

app.listen(port, () => {
  // Connecting to Db and port
  connect();
  console.log("Connected to Server Successfully on port " + port);
});
