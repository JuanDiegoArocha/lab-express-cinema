const mongoose = require('mongoose');
const Movie = require("../models/Movie.models");
const movieData = require("./data.json");
require("../db/index")


Movie.insertMany(movieData)
  .then(() => {
    console.log('Conectado');
  })
  .then(() => {
    console.log("Cerrado");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(`Error seeding database: ${err}`);
    mongoose.connection.close();
  });
