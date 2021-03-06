
var express = require("express");


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8000;

var app = express();


// // Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

// // Sets up the Express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});