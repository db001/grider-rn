require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
	console.log("Connected to Mongo instance");
});

mongoose.connection.on("error", (err) => {
	console.log("Mongo connection error", err);
});

app.get("/", (req, res) => {
	res.send("Hi there!");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
