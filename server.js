const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from Elastic Beanstalk Node.js App!");
});

app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
