const express = require("express");

const router = express.Router();

const {

  registerUser,

  getUsers,

} = require(

  "../controllers/userController"

);

router.get(

  "/",

  getUsers

);

router.post(

  "/register",

  registerUser

);

module.exports = router;