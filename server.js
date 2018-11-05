var express = require("express");
var exphbs = require("express-handlebars");

var mongoose = require("mongoose");
var bodyParser = require("body-parser");


var PORT = 3000;

//Initialize Express
var app = express();

var routes = require("./routes");


app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/week18";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });



app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});