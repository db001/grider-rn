const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
	console.log(req.body);
	res.send("You made a POST request");
});

module.exports = router;
