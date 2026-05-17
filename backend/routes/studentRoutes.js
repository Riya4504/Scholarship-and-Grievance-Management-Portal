const express = require("express");
const router = express.Router();

const supabase = require("../config/supabaseClient");

/*
=====================================
STUDENT LOGIN API
POST /api/student/login
=====================================
*/

router.post("/login", async (req, res) => {

  const { urn, password } = req.body;

  const { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("urn", urn)
    .eq("password", password)
    .single();

  if (error || !data) {
    return res.status(401).json({
      message: "Invalid URN or Password",
    });
  }

  res.json({
    message: "Login Successful",
    student: {
      name: data.name,
      urn: data.urn,
    },
  });

});

module.exports = router;