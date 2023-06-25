const express = require("express");
const { getUsers, createUser } = require("../../controllers");

const router = express.Router();

router
	.route("/")
	.get(getUsers)
	.post(createUser)

router
	.route("/:userId")
	.get()

module.exports = router;
