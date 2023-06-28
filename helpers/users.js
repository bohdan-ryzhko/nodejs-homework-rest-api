const { User } = require("../models/userSchema");

const listUsers = () => User.find();

const addUser = (body) => User.create(body);

module.exports = {
	listUsers,
	addUser,
}
