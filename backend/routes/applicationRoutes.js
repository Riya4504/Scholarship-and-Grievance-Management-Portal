const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient");

/*
APPLY SCHOLARSHIP
POST /api/apply
*/
router.post("/", async (req, res) => {

  const { student_id, scholarship_id, document_url } = req.body;

  const { data, error } = await supabase
    .from("applications")
    .insert([
      {
        student_id,
        scholarship_id,
        document_url,
        status: "pending",
      },
    ]);

  if (error) return res.status(500).json(error);

  res.json({
    message: "Application submitted",
    data,
  });

});

module.exports = router;