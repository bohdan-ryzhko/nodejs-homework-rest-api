const jwt = require("jsonwebtoken");

const { HttpError } = require("../utils");
const { User } = require("../models/userSchema");
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
	const { authorization = "" } = req.headers;
	const [bearer, token] = authorization.split(" ");

	try {
		const verifyToken = jwt.verify(token, SECRET_KEY);

		if (bearer !== "Bearer" || !verifyToken) next(HttpError(401));

		const user = await User.findById(verifyToken.id);

		if (!user) next(HttpError(401));

		req.user = user;
		next();
	} catch (error) {
		next(HttpError(401));
	}
}

module.exports = authenticate;
