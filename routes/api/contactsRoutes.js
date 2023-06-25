const express = require('express');
const {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  changeContact,
  updateStatusContact
} = require('../../controllers');
const { isValidId, validateContactBody } = require('../../middlewares');
const { schemas } = require('../../models/contactSchema');

const router = express.Router();

router
  .route("/")
  .get(getContacts)
  .post(validateContactBody(schemas.addSchema), createContact)

router
  .route("/:contactId")
  .get(isValidId, getContactById)
  .delete(isValidId, deleteContact)
  .put(isValidId, validateContactBody(schemas.addSchema), changeContact)

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateContactBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
