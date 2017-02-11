// 3. Inside the `burgers_controller.js` file, import the following:
// 	* Express
// 	* `burger.js`
var express = require("express");
var connections = require("../models/burger.js");

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Root get route
app.get("/", function(req, res) {

    connection.query("SELECT * FROM wishes;", function(err, data) {
      if (err) throw err;

      // Test it
      // console.log('The solution is: ', data);

      // Test it
      // res.send(data);

      res.render("index", { events: data });
    });
});


// Post route -> back to home
app.post("/", function(req, res) {

    // Test it
    // console.log('You sent, ' + req.body.event);

    // Test it
    // res.send('You sent, ' + req.body.event);

  // connection.query("INSERT INTO wishes (wishes) VALUES (?)", [req.body.wishes], function(err, result) {
    connection.query("INSERT INTO wishes (wishes) VALUES (?)", [req.body.wishes], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });

});

app.listen(port);