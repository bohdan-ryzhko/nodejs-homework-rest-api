const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/userSchema");
const { register, login, logout, getCurrentUserByToken, updateAvatar } = require("../../controllers");

const router = express.Router();

router
	.route("/register")
	.post(validateBody(schemas.validateUserData), register)

router
	.route("/login")
	.post(validateBody(schemas.validateUserData), login)

router
	.route("/logout")
	.post(authenticate, validateBody(schemas.validateLogoutUser), logout)

router
	.route("/current")
	.get(authenticate, getCurrentUserByToken)

router
	.route("/avatars")
	.patch(authenticate, upload.single("avatar"), updateAvatar)

module.exports = router;
