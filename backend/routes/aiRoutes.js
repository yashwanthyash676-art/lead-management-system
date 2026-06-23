const express = require("express");

const router = express.Router();

const {

  exportLeads,

} = require(

  "../controllers/aiController"

);

router.get(

  "/export",

  exportLeads

);

module.exports = router;