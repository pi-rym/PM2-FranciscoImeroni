

const {Movies} = require ("../")
const moviesValidation = require("../controllers/moviesController");
const Movie = require('../models/Movie')

module.exports = {
    getAllMovies: async () => {
        try {
            const movies = await Movie.find()
            const moviesCollection = movies.map((movie)=> {
                if (moviesValidation(movie)) {
                    return new Movies(movie);


                }
            });
            return moviesCollection;

        }catch (error) {
            throw Error(error.message);
        }
        },
        postMovie: async (movie) => {
            try {
                const movieCreated = await Movie.create(movie);

            }catch (err) {
            throw Error(err.message);
        }
    }
};