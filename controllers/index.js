const { ctrlWrapper } = require("../utils");
const { register, login } = require("./auth");

const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  changeContact,
  updateStatusContact
} = require("./contactsControllers");

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  deleteContact: ctrlWrapper(deleteContact),
  changeContact: ctrlWrapper(changeContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  register: ctrlWrapper(register),
  login: ctrlWrapper(login)
}
