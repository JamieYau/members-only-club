const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController")

// GET profile page
router.get("/", profileController.getProfilePage)

// POST profile membership form
router.post("/", profileController.postUpdateMembership)

module.exports = router;
