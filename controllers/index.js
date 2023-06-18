const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const createContact = require("./createContact");
const deleteContact = require("./deleteContact");
const changeContact = require("./changeContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  changeContact,
  updateStatusContact
}
