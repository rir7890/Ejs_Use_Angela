const express = require("express");
const morgan = require("morgan");
const app = express();

const port = 4000;

app.use(morgan("tiny"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  let tagline =
    "No programming concept is complete without a cute animal mascot.";
  res.render("pages/index.ejs", {
    mascots: mascots,
    tagline: tagline,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});

app.listen(port, () => {
  console.log("my web site is running on the port of 4000");
});
