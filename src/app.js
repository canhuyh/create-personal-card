const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../public/template");
// const partialsDirectory = path.join(__dirname, "../public/template/partials");

// hbs.registerPartials(partialsDirectory);

app.use(express.static(publicDirectory));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//setup view engine for express
app.set("view engine", "hbs");

app.set("views", viewsDirectory);

app.get("/", function (request, response) {
  response.render("index", {
    linkShareOnFacebook: process.env.LINK_SHARE_ON_FACEBOOK,
  });
});

app.post("/generator", urlencodedParser, function (request, response) {
  const { img, name } = request.body;
  response.render("index", {
    img: img,
    name: name,
    linkShareOnFacebook: process.env.LINK_SHARE_ON_FACEBOOK,
  });
});

app.get("*", (request, response) => {
  response.render("404");
});

console.log("LISTENING PORT " + process.env.PORT);
app.listen(process.env.PORT);
