/* const moviesService = require("../services/moviesService");

const moviesController = async (req, res) => {
    try {
        const response = await moviesService.getAllMovies();
        res.status(200).json(response);
    } catch (error) {
       res.status(500).send(error.message);
   }
};


module.exports = moviesController; */

const moviesService = require("../services/moviesService");

const moviesController = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({
                error: "error interno del servidor",
            });
        }
    },

    createMovie: async (req, res) => {
        try {
            const { title } = req.body;
            await moviesService.createMovies(title);
            res.status(201).json({
                message: "Pelicula creada correctamente",
            });
        } catch (error) {
            res.status(500).json({
                error: "error al crear pelicula",
            });
            
        }
    }
};

module.exports = moviesController;
