const fs = require('fs/promises');
const path = require('path');
const { uuid } = require('uuidv4');
const { Contact } = require('./schema/contactSchema');

const contactsPath = path.join(__dirname, "contacts.json");

const getContacts = async (path) => {
  try {
    return JSON.parse(await fs.readFile(path, "utf-8"));
  } catch (error) {
    return { error };
  }
}

const listContacts = async () => {
  try {
    return await getContacts(contactsPath);
  } catch (error) {
    return { error };
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await getContacts(contactsPath);
    const findContact = contacts.find(contact => contact.id === contactId);

    if (findContact === undefined) throw new Error();

    return findContact;

  } catch (error) {
    return { error: { message: "Not found" } };
  }
}

const removeContact = async (contactId) => {
  try {
    
  } catch (error) {
    
  }
}

const addContact = async (body) => {
    try {
      const contact = new Contact(body);
      await contact.validate();

      const newContact = { ...body, id: uuid() }

      const contacts = await getContacts(contactsPath);
      contacts.push(newContact);

      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

      return newContact;
  } catch (error) {
    return error
  }
}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
