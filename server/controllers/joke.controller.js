// ---------------------------------------------------
// CONTROLLERS SETUP
// ---------------------------------------------------

// Joke model require, saved in variable called 'JokeModel' which is imported from file 'joke.moldel.js'
const JokeModel = require("../models/joke.model");

// Setting up and exporting object that manage the different web requests to the server
module.exports = {

    // I) GET REQUESTS
    // Find all jokes
    findAllJokes: (req, res) => {
        JokeModel.find() // calling the database, retrieving all jokes
            .then((allJokes) => res.json(allJokes)) // if successful, we got all jokes
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },
    // Find a joke by Id
    findOneSingleJoke: (req, res) => {
        JokeModel.findOne({ _id: req.params.id }) // calling the database, retrieving a specific joke
            .then((oneSingleJoke) => res.json(oneSingleJoke)) // if successful, we got specific joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },
    
    // II) POST REQUESTS
    // Create a joke
    createNewJoke: (req, res) => {
        JokeModel.create(req.body) // sending to the database a new joke object
            .then((newJoke) => res.json(newJoke)) // if successful, we save new joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },

    // III) UPDATE REQUESTS
    // Update a joke by Id
    updateExistingJoke: (req, res) => {
        JokeModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // calling the database, retrieving a specific joke and updating it
            .then((updatedJoke) => res.json(updatedJoke)) // if successful, we update the new joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },

    // IV) DELETE REQUESTS
    // Delete a joke by Id
    deleteAnExistingJoke: (req, res) => {
        JokeModel.deleteOne({ _id: req.params.id }) // calling the database and deliting a specific joke 
            .then((deletedJoke) => res.json(deletedJoke)) // if successful, we delete the selected joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    }
};
