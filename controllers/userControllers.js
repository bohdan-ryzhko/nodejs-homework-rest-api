const {
	listUsers,
	addUser,
} = require("../helpers/users");

const getUsers = async (_, res) => {
	const users = await listUsers();
	res.status(200).json({ users });
}

const createUser = async (req, res) => {
	const user = await addUser(req.body);
	res.status(201).json({ user });
}

module.exports = {
	getUsers,
	createUser,
}
