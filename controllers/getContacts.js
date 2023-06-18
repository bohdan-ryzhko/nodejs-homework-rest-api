const { listContacts } = require("../models/contacts");

const getContacts = async (_, res) => {
  try {
    const contacts = await listContacts();

    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = getContacts;