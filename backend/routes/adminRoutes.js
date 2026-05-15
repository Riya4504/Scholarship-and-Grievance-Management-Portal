const express = require("express");

const router = express.Router();

const {
  getApplications,
  addApplication,
} = require("../controllers/adminController");

router.get("/applications", getApplications);

router.post("/apply", addApplication);

module.exports = router;
