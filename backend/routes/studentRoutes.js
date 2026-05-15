const express = require("express");

const router = express.Router();

/*
  TEMP DATABASE
*/
const students = [
  {
    urn: "2302652",
    password: "12345",
    name: "Riya Sharma",
  },
  {
    urn: "2301111",
    password: "11111",
    name: "Aman Verma",
  },
];

/*
=====================================
STUDENT LOGIN API
=====================================
POST /api/student/login
*/

router.post("/login", (req, res) => {
  const { urn, password } = req.body;

  // CHECK STUDENT
  const student = students.find(
    (s) => s.urn === urn && s.password === password,
  );

  if (!student) {
    return res.status(401).json({
      message: "Invalid URN or Password",
    });
  }

  res.json({
    message: "Login Successful",
    student: {
      name: student.name,
      urn: student.urn,
    },
  });
});

module.exports = router;
