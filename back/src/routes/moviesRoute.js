/* const {Router} = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

const moviesRoute = Router();

router.get('/', moviesController);

moviesRoute.get("/", moviesController);

moviesRoute.post("/", moviesController.createMovie);

module.exports = router;
module.exports = moviesRoute; */

const express = require("express");
const moviesController = require("../controllers/moviesController");
const moviesService = require("../services/moviesService");

const router = express.Router(); // Aquí se crea el router utilizando express.Router()

router.get('/', moviesService.getAllMovies);
router.post('/', moviesService.createMovie);

module.exports = router;
