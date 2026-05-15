const express = require("express");

const router = express.Router();

/*
  TEMPORARY DATABASE
  Later replace with Supabase/MySQL
*/
let applications = [];

/*
========================================
APPLY SCHOLARSHIP API
========================================
POST /api/apply
*/

router.post("/", (req, res) => {
  const {
    name,
    urn,
    year,
    batch,
    scholarshipName,
    scholarshipType,
    amount,
    bankName,
    accountNumber,
    ifsc,
  } = req.body;

  // VALIDATION
  if (
    !name ||
    !urn ||
    !year ||
    !batch ||
    !scholarshipName ||
    !scholarshipType
  ) {
    return res.status(400).json({
      message: "Please fill all required fields",
    });
  }

  // CHECK DUPLICATE APPLICATION
  const alreadyApplied = applications.find(
    (app) => app.urn === urn && app.scholarshipName === scholarshipName,
  );

  if (alreadyApplied) {
    return res.status(400).json({
      message: "Student already applied for this scholarship",
    });
  }

  // CREATE APPLICATION
  const newApplication = {
    id: applications.length + 1,

    name,
    urn,
    year,
    batch,

    scholarshipName,
    scholarshipType,

    amount: amount || "",

    bankDetails: {
      bankName: bankName || "",
      accountNumber: accountNumber || "",
      ifsc: ifsc || "",
    },

    status: "Pending",

    appliedAt: new Date(),
  };

  // SAVE
  applications.push(newApplication);

  res.status(201).json({
    message: "Scholarship Applied Successfully ✅",
    application: newApplication,
  });
});

/*
========================================
GET ALL APPLICATIONS
========================================
GET /api/apply
*/

router.get("/", (req, res) => {
  res.json(applications);
});

module.exports = router;
