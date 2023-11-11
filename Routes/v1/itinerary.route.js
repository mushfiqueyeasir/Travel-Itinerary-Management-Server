const express = require("express");
const itineraryController = require("../../Controllers/v1/itinerary.controller");
const verifyToken = require("../../middleware/v1/tokenVerification");

const router = express.Router();

router
  .post("/", verifyToken, itineraryController.create)
  .get("/", verifyToken, itineraryController.getAll);

router
  .route("/user/:userId")
  .get(verifyToken, itineraryController.getAllUserData);

router
  .route("/:itineraryId")
  .get(verifyToken, itineraryController.get)
  .put(verifyToken, itineraryController.update)
  .delete(verifyToken, itineraryController.delete);

module.exports = router;
