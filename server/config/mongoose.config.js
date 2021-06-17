// ---------------------------------------------------
// DATABASE SETUP
// ---------------------------------------------------

// Moongose Library required, saved in variable called 'mongoose'
const mongoose = require('mongoose'); 

// Using mongoose to connect to a Mongo Database
mongoose.connect("mongodb://localhost/crmdb",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connection established"))
  .catch(err => console.log("There was an error:", err));
