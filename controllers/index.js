const { ctrlWrapper } = require("../utils");

const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  changeContact,
  updateStatusContact
} = require("./contactsControllers");

const {
  getUsers,
  createUser,
} = require("./userControllers");

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactById: ctrlWrapper(getContactById),
  createContact: ctrlWrapper(createContact),
  deleteContact: ctrlWrapper(deleteContact),
  changeContact: ctrlWrapper(changeContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  getUsers: ctrlWrapper(getUsers),
  createUser: ctrlWrapper(createUser)
}
