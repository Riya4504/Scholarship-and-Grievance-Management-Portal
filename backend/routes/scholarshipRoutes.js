const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

/*
GET SCHOLARSHIPS
*/
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("scholarships")
    .select("*");

  if (error) return res.status(500).json(error);

  res.json(data);
});

module.exports = router;