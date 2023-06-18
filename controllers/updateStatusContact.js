const { updateContact } = require("../models/contacts");

const updateStatusContact = async (req, res) => {
	try {
		const { favorite } = req.body;
		const { contactId } = req.params;

		const updatedStatusContact = await updateContact(contactId, { favorite });

		console.log(favorite);

		res.status(200).json({ contact: updatedStatusContact });
	} catch (error) {
		res.status(400).json({ message: "missing field favorite" })
	}
}

module.exports = updateStatusContact;