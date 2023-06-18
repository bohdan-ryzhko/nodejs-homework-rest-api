const express = require('express');
const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  changeContact
} = require('../../controllers');

const router = express.Router();

router.get('/', getContacts);
router.get('/:contactId', getContactById);
router.post('/', createContact);
router.delete('/:contactId', deleteContact);
router.put('/:contactId', changeContact);

module.exports = router;
