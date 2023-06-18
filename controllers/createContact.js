const { addContact } = require("../models/contacts");

const createContact = async (req, res) => {
  try {
    const newContact = await addContact(req.body);

    res.status(201).json({ contact: newContact });
  } catch (error) {
    res.status(400).json({ error });
  }
}

module.exports = createContact;