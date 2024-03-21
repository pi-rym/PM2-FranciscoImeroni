const {Router} = require("express");
const moviesRoute = require ("./moviesRoute")
const moviesController = require("../controllers/moviesController");

const router = Router();


router.get('/movies', moviesController.getAllMovies);
router.post('/movies', moviesController.createMovie);

module.exports = router;
