const { Contact } = require('./schema/contactSchema');

const listContacts = () => Contact.find();

const findContactById = (contactId) => Contact.findOne({ _id: contactId });

const removeContact = (contactId) => Contact.findByIdAndRemove({ _id: contactId });

const addContact = (body) => Contact.create(body);

const updateContact = async (contactId, body) =>
  Contact.findByIdAndUpdate({ _id: contactId }, body, { new: true });

module.exports = {
  listContacts,
  findContactById,
  removeContact,
  addContact,
  updateContact,
}
