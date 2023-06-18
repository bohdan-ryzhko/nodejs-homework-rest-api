const { findContactById } = require("../models/contacts");

const getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;

    const contact = await findContactById(contactId);

    res.status(200).json({ contact });
  } catch (error) {
    res.status(404).json({ error });
  }
}

module.exports = getContactById;
