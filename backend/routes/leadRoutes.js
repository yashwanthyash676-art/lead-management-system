const express = require("express");

const router = express.Router();


const {

  getLeads,

  getLead,

  addLead,

  updateLead,

  deleteLead,

} = require("../controllers/leadController");


// GET ALL LEADS

router.get("/", getLeads);


// GET ONE LEAD

router.get("/:id", getLead);


// ADD LEAD

router.post("/", addLead);


// UPDATE LEAD

router.put("/:id", updateLead);


// DELETE LEAD

router.delete("/:id", deleteLead);


module.exports = router;