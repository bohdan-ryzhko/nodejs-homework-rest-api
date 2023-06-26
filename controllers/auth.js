const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");
const { HttpError } = require("../utils");

const { SECRET_KEY, EXPIRES_IN } = process.env;

const register = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user) throw HttpError(409, "Email already in use");

	const hashPassword = await bcrypt.hash(password, 10);

	const newUser = await User.create({ ...req.body, password: hashPassword });
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

	res.status(200).json({ token });
}

module.exports = {
	register,
	login,
}
