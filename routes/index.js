const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();

const Movie = require("../models/Movie.models")
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie.find()
    .select({name: 1})
    .then((response) => {
        console.log(response)

        
    

      res.render("movies.hbs", {
        allMovies: response
      });
    })



    .catch(error => {
      console.log(error);
      res.send("Error");
    });
});

router.get("/movie/:movieId", async (req, res, next) => {
    try {
        const response = await Movie.findById( req.params.movieId )
        console.log(response)

        res.render("views/singleMovie.hbs", {
            singleMovie: response
        })

    } catch (error) {
        next(error)
    };
})

module.exports = router;
