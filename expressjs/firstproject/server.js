const express = require('express');
const app = express();

// Setup your express app and body-parser configurations
// Setup your javascript template view engine
// we will serve your static pages from the public directory, it will act as your root directory
app.set("view engine", "ejs");

// Setup your default display on launch
app.get("/", function (req, res) {
  // It will not fetch and display any data in the index page
  res.render("form");
});

app.listen(1000, function(){
    console.log('server started!');
});