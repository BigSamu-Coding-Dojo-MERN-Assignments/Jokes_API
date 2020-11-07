// ---------------------------------------------------
// SERVER INITIALIZATION AND CONFIGURATION
// ---------------------------------------------------

// Express Library required, saved in variable called 'express'
const express = require("express"); 
// Create 'app' variable which is an instance of a express server
const app = express(); 

// Settings for being able to access POST data. Needed for being able to pull it out in these request objects.
// express.urlencoded() and express.json() are Express middleware functions. 
// They are responsible for providing and parsing the request.body data.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Initialize database connection (calling mongoose.config file)
require("./config/mongoose.config");

// Import the jokes routes function from our jokes.routes.js file
const JokeRoutes = require("./routes/joke.route");
JokeRoutes(app); // passing Express instance 'app' to JokesRoutes

// Run and listen server in port 8000
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
