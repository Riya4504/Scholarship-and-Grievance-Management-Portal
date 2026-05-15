const loginStudent = async (req, res) => {
  const { urn, password } = req.body;

  console.log("Received:", urn, password);

  // DEMO LOGIN
  if (urn === "2302652" && password === "12345") {
    return res.json({
      message: "Login successful",
      student: {
        name: "Riya Sharma",
        urn: "2302652",
      },
    });
  }

  res.status(401).json({
    message: "Invalid credentials",
  });
};

module.exports = {
  loginStudent,
};
