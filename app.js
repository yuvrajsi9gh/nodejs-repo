const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hi This is a test of a pipeline running succesfully 🚀");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
