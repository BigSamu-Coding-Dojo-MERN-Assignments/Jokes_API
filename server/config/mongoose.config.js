// ---------------------------------------------------
// DATABASE SETUP
// ---------------------------------------------------

// Moongose Library required, saved in variable called 'mongoose'
const mongoose = require("mongoose"); 

// Using mongoose to connect to a Mongo Database
mongoose.connect("mongodb://localhost/jokes-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Sucessfully connected to Database"))
  .catch(err => console.log("Something went wrong when connecting to the database: ", err));
