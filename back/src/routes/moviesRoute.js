

const express = require("express");
const moviesController = require("../controllers/moviesController"); // Importa el controlador correcto
const router = express.Router();

router.get('/', moviesController.getAllMovies);
router.post('/', moviesController.createMovie);




module.exports = router;
