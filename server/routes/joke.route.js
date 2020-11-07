// ---------------------------------------------------
// ROUTES SETUP
// ---------------------------------------------------

// Joke controller require, saved in variable called 'JokeController' which is imported from file 'joke.controllers.js'
const JokeController = require("../controllers/joke.controller");

// Setting up and exporting and object that connects the routes with the different web requests to the server
module.exports = (app) => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};