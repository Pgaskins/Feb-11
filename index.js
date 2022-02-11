const express = require("express");
const server = express();

//Allows you to pass data from back-end to front via routes
const handleBars = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Listening....");
});

//Set static folder
server.use(express.static(path.join(__dirname, "public")));
//Set HandleBars Middleware
server.engine("handlebars", handleBars());
server.set("view engine", "handlebars");

//Set routes to Home Page
server.get("/", (req, res) => {
  res.render("home", {
    //past data to pages from here by creating a variable
  });
});
