// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require('../models/movie.model');

// all your routes here
router.get('/create', (req,res) => {
    Celebrity.find()
      .then(allCeleb =>{
        res.render('movies/new-movie.hbs', {allCeleb});
     })
     .catch(error => console.log(error))
})

router.post('/create', ( req, res) => {
    const {title, genre, plot, cast} = req.body;

    Movie.create({title, genre, plot, cast})
    .then((movieDb) => {
        console.log("created movie:", movieDb)
        res.redirect('/movies')
    })
    .catch(error => console.log(error))
})

router.get('/', ( req, res) => {
    Movie.find()
    .then(allMovie =>{
        console.log('All movies:', allMovie)
        res.render('movies/movies.hbs', {allMovie})
    })
    .catch(error => console.log(error))
})

router.get('/:movieId', (req, res) => {
    const {movieId} = req.params;

    Movie.findById(movieId)
    .populate('cast')
    .then(aMovie => {
        res.render("movies/movie-details", {aMovie} )
    })
    .catch(error => console.log(error));
})

module.exports = router;