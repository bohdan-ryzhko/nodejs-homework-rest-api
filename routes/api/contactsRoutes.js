const express = require('express');
const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  changeContact,
  updateStatusContact
} = require('../../controllers');
const { isValidId, validateBody } = require('../../middlewares');
const { schemas } = require('../../models/contactSchema');

const router = express.Router();

router
  .route("/")
  .get(getContacts)
  .post(validateBody(schemas.addSchema), createContact)

router
  .route("/:contactId")
  .get(isValidId, getContactById)
  .delete(isValidId, deleteContact)
  .put(isValidId, validateBody(schemas.addSchema), changeContact)

router
  .route("/:contactId/favorite")
  .patch(isValidId, validateBody(schemas.updateFavoriteSchema), updateStatusContact);

module.exports = router;
