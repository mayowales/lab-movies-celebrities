
const { model, Schema } = require('mongoose');
const Celebrity = require('./Celebrity.model');

const movieSchema = new Schema({

    title: String,
    genre: String,
    plot: String,
    cast: [{type: Schema.Types.ObjectId, ref: Celebrity}]

});

const Movie = model('Movie', movieSchema);


module.exports = Movie;