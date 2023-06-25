const {
	addContact,
	findContactById,
	listContacts,
	removeContact,
	updateContact,
} = require("../helpers/contacts");

const getContacts = async (_, res) => {
	const contacts = await listContacts();
	res.status(200).json({ contacts });
}

const getContactById = async (req, res) => {
	const { contactId } = req.params;
	const contact = await findContactById(contactId);

	res.status(200).json({ contact });
}

const createContact = async (req, res) => {
	const newContact = await addContact(req.body);

	res.status(201).json({ contact: newContact });
}

const deleteContact = async (req, res) => {
	const { contactId } = req.params;
	const removedMessageSuccess = await removeContact(contactId);

	res.status(200).json({ message: removedMessageSuccess });
}

const changeContact = async (req, res) => {
	const { contactId } = req.params;

	const updatedContact = await updateContact(contactId, req.body);

	res.status(200).json({ contact: updatedContact });
}

const updateStatusContact = async (req, res) => {
	const { favorite } = req.body;
	const { contactId } = req.params;
	console.log(favorite);
	console.log(contactId);
	const updatedStatusContact = await updateContact(contactId, { favorite })

	res.status(200).json({ contact: updatedStatusContact });
}

module.exports = {
	getContacts,
	getContactById,
	createContact,
	deleteContact,
	changeContact,
	updateStatusContact,
};
