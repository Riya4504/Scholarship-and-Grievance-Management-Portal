const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

/*
ADMIN LOGIN
POST /api/admin/login
*/
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from("admins")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !data) {
    return res.status(401).json({ message: "Invalid login" });
  }

  res.json({
    message: "Admin login successful",
    admin: data,
  });
});

/*
GET ALL APPLICATIONS
*/
router.get("/applications", async (req, res) => {
  const { data, error } = await supabase
    .from("applications")
    .select("*");

  if (error) return res.status(500).json(error);

  res.json(data);
});

module.exports = router;