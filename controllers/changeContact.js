const { updateContact } = require("../models/contacts");

const changeContact = async (req, res) => {
  try {
    const { contactId } = req.params;

    const updatedContact = await updateContact(contactId, req.body);

    res.status(200).json({ contact: updatedContact });
  } catch (error) {
    res.status(404).json({ error });
  }
}

module.exports = changeContact;