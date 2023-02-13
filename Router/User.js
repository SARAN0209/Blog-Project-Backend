const { Router } = require("express");
const express = require("express");
const router = express.Router();
const login = require("../Modules/user");

router.post("/signup", login.signup);
router.post("/signin", login.signin);

module.exports = router;
