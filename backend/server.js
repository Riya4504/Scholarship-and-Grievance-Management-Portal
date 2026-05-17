const express = require("express");
const cors = require("cors");

const supabase = require("./config/supabaseClient");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const studentRoutes = require("./routes/studentRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const adminRoutes = require("./routes/adminRoutes");
const clerkRoutes = require("./routes/clerkRoutes");
const scholarshipRoutes = require("./routes/scholarshipRoutes");

// API ROUTES
app.use("/api/student", studentRoutes);
app.use("/api/apply", applicationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/clerk", clerkRoutes);
app.use("/api/scholarship", scholarshipRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});