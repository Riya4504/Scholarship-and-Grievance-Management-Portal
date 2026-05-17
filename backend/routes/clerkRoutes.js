const express = require("express");
const router = express.Router();
const supabase = require("../config/supabaseClient");

/*
CLERK LOGIN
POST /api/clerk/login
*/
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from("clerks")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !data) {
    return res.status(401).json({ message: "Invalid login" });
  }

  res.json({
    message: "Clerk login successful",
    clerk: data,
  });
});

/*
GET APPLICATIONS
*/
router.get("/applications", async (req, res) => {
  const { data, error } = await supabase
    .from("applications")
    .select("*");

  if (error) return res.status(500).json(error);

  res.json(data);
});

/*
APPROVE / REJECT APPLICATION
*/
router.put("/applications/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const { data, error } = await supabase
    .from("applications")
    .update({ status })
    .eq("id", id);

  if (error) return res.status(500).json(error);

  res.json(data);
});

module.exports = router;