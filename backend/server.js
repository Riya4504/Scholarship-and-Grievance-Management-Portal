import supabase from "./supabaseClient.js";
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const studentRoutes = require("./routes/studentRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
 
// API ROUTES
app.use("/api/student", studentRoutes);
app.use("/api/apply", applicationRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
