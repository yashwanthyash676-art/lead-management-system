const ExcelJS = require("exceljs");

const Lead = require("../models/Lead");

const exportLeads = async (req, res) => {

  try {

    const leads = await Lead.find();

    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet("Leads");

    worksheet.columns = [

      {
        header: "Name",
        key: "name",
        width: 25,
      },

      {
        header: "Email",
        key: "email",
        width: 30,
      },

      {
        header: "Phone",
        key: "phone",
        width: 20,
      },

      {
        header: "Company",
        key: "company",
        width: 25,
      },

      {
        header: "Status",
        key: "status",
        width: 20,
      },

      {
        header: "Notes",
        key: "notes",
        width: 35,
      },

    ];

    leads.forEach((lead) => {

      worksheet.addRow({

        name: lead.name,

        email: lead.email,

        phone: lead.phone,

        company: lead.company,

        status: lead.status,

        notes: lead.notes,

      });

    });

    res.setHeader(

      "Content-Type",

      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    );

    res.setHeader(

      "Content-Disposition",

      "attachment; filename=leads.xlsx"

    );

    await workbook.xlsx.write(res);

    res.end();

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};

module.exports = {

  exportLeads,

};