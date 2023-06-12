const express = require('express')
const { listContacts, getContactById, addContact } = require('../../models/contacts')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const contacts = await listContacts();

    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await getContactById(contactId);

    res.status(200).json({ contact });
  } catch (error) {
    res.status(404).json({ error });
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newContact = await addContact(req.body);

    res.status(201).json({ contact: newContact });
  } catch (error) {
    res.status(400).json({ error });
  }
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router;
