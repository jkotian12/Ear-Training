const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("et");
});

app.get("/info", async (req, res) => {
  res.render("info");
});

app.listen("3000", () => {
  console.log("listening on port 3000");
});
