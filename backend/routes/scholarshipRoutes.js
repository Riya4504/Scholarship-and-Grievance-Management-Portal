const express = require("express");
const router = express.Router();

const {
  getScholarships,
  addScholarship,
} = require("../controllers/scholarshipController");

router.get("/", getScholarships);

router.post("/add", addScholarship);

module.exports = router;
