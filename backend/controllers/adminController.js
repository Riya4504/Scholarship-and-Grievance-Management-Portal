const Application = require("../models/Application");

exports.getApplications = async (req, res) => {
  const applications = await Application.find();

  res.json(applications);
};

exports.addApplication = async (req, res) => {
  const application = new Application(req.body);

  await application.save();

  res.json({
    message: "Application Submitted",
  });
};
