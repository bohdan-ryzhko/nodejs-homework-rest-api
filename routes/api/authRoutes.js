const express = require("express");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/userSchema");
const { register, login, logout } = require("../../controllers");

const router = express.Router();

router
	.route("/register")
	.post(validateBody(schemas.validateUserData), register);

router
	.route("/login")
	.post(validateBody(schemas.validateUserData), login);

router
	.route("/logout")
	.post(validateBody(schemas.validateLogoutUser), logout);

module.exports = router;
