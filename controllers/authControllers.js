const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const path = require("path");
const fs = require("fs").promises;
const { User } = require("../models/userSchema");
const { HttpError } = require("../utils");

const { SECRET_KEY, EXPIRES_IN } = process.env;

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const register = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user) throw HttpError(409, "Email already in use");

	const hashPassword = await bcrypt.hash(password, 10);
	const avatarURL = gravatar.url(email);

	const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL });
	res.status(201).json({ email: newUser });
}

const login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) throw HttpError(401, "Email or password invalid");

	const passwordCompare = await bcrypt.compare(password, user.password);
	if (!passwordCompare) throw HttpError(401, "Email or password invalid");

	const payload = { id: user._id }

	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRES_IN });

	const updatedAndAddedTokenUser = await User.findOneAndUpdate(
		{ email },
		{ $set: { token } },
		{ new: true }
	);

	res.status(200).json({ user: updatedAndAddedTokenUser });
}

const logout = async (req, res) => {
	const { id } = req.body;
	const user = await User.findById(id);

	if (!user) throw HttpError(401);

	await User.findOneAndUpdate(
		{ _id: id },
		{ $set: { token: "" } },
		{ new: true }
	);

	res.status(204);
}

const getCurrentUserByToken = async (req, res) => {
	const { authorization = "" } = req.headers;
	const [_, token] = authorization.split(" ");

	const currentUser = await User.findOne({ token }).select("-createdAt -updatedAt");

	if (!currentUser) throw HttpError(401);

	res.status(200).json({ user: currentUser });
}

const updateAvatar = async (req, res) => {
	const { _id } = req.user;
	const { path: tempUpload, originalname } = req.file;

	const filename = `${_id}_${originalname}`;

	const resultUpload = path.join(avatarsDir, filename);

	await fs.rename(tempUpload, resultUpload);

	const avatarURL = path.join("avatars", filename);

	await User.findByIdAndUpdate(_id, { avatarURL });

	res.json({ avatarURL });
}

module.exports = {
	register,
	login,
	logout,
	getCurrentUserByToken,
	updateAvatar,
}
