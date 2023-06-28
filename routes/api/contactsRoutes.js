const express = require('express');
const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  changeContact,
  updateStatusContact
} = require('../../controllers');
const { isValidId, validateBody, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contactSchema');

const router = express.Router();

router.use(authenticate);

router
  .route("/")
  .get(getContacts)
  .post(validateBody(schemas.addSchema), createContact)

router
  .route("/:contactId")
  .all(isValidId)
  .get(getContactById)
  .delete(deleteContact)
  .put(validateBody(schemas.addSchema), changeContact)

router
  .route("/:contactId/favorite")
  .patch(isValidId, validateBody(schemas.updateFavoriteSchema), updateStatusContact);

module.exports = router;
