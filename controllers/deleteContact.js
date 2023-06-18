const { removeContact } = require("../models/contacts");

const deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const removedMessageSuccess = await removeContact(contactId);

    res.status(200).json({ message: removedMessageSuccess });

  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
}

module.exports = deleteContact;
