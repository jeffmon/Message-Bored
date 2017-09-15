const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const path = require("path");
const bp = require("body-parser");

app.use(express.static("public"));
app.use(bp.urlencoded());

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "/public") });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
