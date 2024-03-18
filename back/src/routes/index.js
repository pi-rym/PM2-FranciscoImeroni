const {Router} = require("express");
const moviesController = require("../controllers/moviesController");

const router = Router();

router.use("/movies", moviesController);

module.exports = router;