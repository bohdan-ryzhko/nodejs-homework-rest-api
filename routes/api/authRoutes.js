const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/userSchema");
const { register, login, logout, getCurrentUserByToken } = require("../../controllers");

const router = express.Router();

router
	.route("/register")
	.post(validateBody(schemas.validateUserData), register)

router
	.route("/login")
	.post(validateBody(schemas.validateUserData), login)

router
	.route("/logout")
	.post(validateBody(schemas.validateLogoutUser), logout)

router
	.route("/current")
	.get(authenticate, getCurrentUserByToken)

module.exports = router;
