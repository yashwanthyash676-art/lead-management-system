const Lead = require("../models/Lead");


// GET ALL LEADS

const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    res.json(leads);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// GET ONE LEAD

const getLead = async (req, res) => {

  try {

    const lead = await Lead.findById(
      req.params.id
    );

    if (!lead) {

      return res.status(404).json({
        message: "Lead not found",
      });

    }

    res.json(lead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// ADD LEAD

const addLead = async (req, res) => {

  try {

    const lead = await Lead.create({

      name: req.body.name,

      email: req.body.email,

      phone: req.body.phone,

      company: req.body.company,

      status: req.body.status,

      notes: req.body.notes,

    });

    res.status(201).json(lead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// UPDATE LEAD

const updateLead = async (req, res) => {

  try {

    const lead = await Lead.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true,
      }

    );

    res.json(lead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


// DELETE LEAD

const deleteLead = async (req, res) => {

  try {

    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Lead deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};


module.exports = {

  getLeads,

  getLead,

  addLead,

  updateLead,

  deleteLead,

};