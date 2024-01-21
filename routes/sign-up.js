const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/sign-upController");

// GET sign-up page
router.get("/", signUpController.getSignUpPage);
router.post("/", signUpController.postSignUpPage);

module.exports = router;