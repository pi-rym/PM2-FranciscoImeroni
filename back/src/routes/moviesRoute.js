const {Router} = require ("express");

const moviesRouter = Router();

moviesRouter.get("/", moviesController);

module.exports = moviesRoute;