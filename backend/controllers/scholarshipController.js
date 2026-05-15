const supabase = require("../config/supabaseClient");

// GET ALL SCHOLARSHIPS
const getScholarships = async (req, res) => {
  try {
    const { data, error } = await supabase.from("scholarships").select("*");

    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// ADD SCHOLARSHIP
const addScholarship = async (req, res) => {
  try {
    const { title, type, amount, deadline, description } = req.body;

    const { data, error } = await supabase.from("scholarships").insert([
      {
        title,
        type,
        amount,
        deadline,
        description,
      },
    ]);

    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    res.json({
      message: "Scholarship Added Successfully",
      data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getScholarships,
  addScholarship,
};
