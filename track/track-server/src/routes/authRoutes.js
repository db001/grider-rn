const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const router = express.Router();

router.post("/signup", (req, res) => {
	console.log(req.body);
	res.send("You made a POST request");
});

module.exports = router;
