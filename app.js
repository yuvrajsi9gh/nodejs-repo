const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Simple route
app.get("/", (req, res) => {
  res.send("Hello from Node.js app deployed with AWS Elastic Beanstalk!");
});

// Another route
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
