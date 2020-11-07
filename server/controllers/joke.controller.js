// ---------------------------------------------------
// CONTROLLERS SETUP
// ---------------------------------------------------

// Joke model require, saved in variable called 'JokeModel' which is imported from file 'joke.moldel.js'
const JokeModel = require("./../models/joke.model");

// Setting up and exporting object that manage the different web requests to the server
module.exports = {

    // I) GET REQUESTS
    // Find all Jokes
    findAllJokes: (req, res) => {
        JokeModel.find() // calling the database, retrieving all jokes
            .then((allJokes) => res.json(allJokes)) // if successful, we got all jokes
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },
    // Get a single Joke
    findOneSingleJoke: (req, res) => {
        JokeModel.findOne({ _id: req.params.id }) // calling the database, retrieving a specific joke
            .then((oneSingleJoke) => res.json(oneSingleJoke)) // if successful, we got specific joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },
    
    // II) POST REQUESTS
    // Create a joke - Post Request
    createNewJoke: (req, res) => {
        JokeModel.create(req.body) // sending to the database a new joke object
            .then((newJoke) => res.json(newJoke)) // if successful, we save new joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },

    // III) UPDATE REQUESTS
    // Create a joke - Post Request
    updateExistingJoke: (req, res) => {
        JokeModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // calling the database, retrieving a specific joke and updating it
            .then((updatedJoke) => res.json(updatedJoke)) // if successful, we update the new joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    },

    // IV) UPDATE REQUESTS
    // Create a joke - Post Request
    deleteAnExistingJoke: (req, res) => {
        JokeModel.deleteOne({ _id: req.params.id }) // calling the database and deliting a specific joke 
            .then((deletedJoke) => res.json(deletedJoke)) // if successful, we delete the selected joke
            .catch((err) => res.json({ message: "Something went wrong", error: err })); // if not, then we have errors
    }
};
