// ---------------------------------------------------
// MODELS SETUP
// ---------------------------------------------------

// Moongose Library required, saved in variable called 'mongoose'
const mongoose = require("mongoose"); 

// Create a blueprint by making a new schema instance 'JokeSchema' using mongoose.Schema(...) constructor
const JokeSchema = new mongoose.Schema({
    setup : {type: String},
    punchline: {type: String} 
}, { timestamps: true });

// Create a Mongo Database collection called 'Joke' usign blueprint created before and assign it in variable 'JokeModel'
const JokeModel = mongoose.model("Joke", JokeSchema);

// Export variable 'JokeModel' that holds the schema for our collection model
module.exports = JokeModel;