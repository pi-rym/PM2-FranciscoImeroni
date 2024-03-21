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



/* const moviesController = {
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
}; */




/* const moviesController = async (req,res) => {
    try {
        const movies = await movieServices.getAllMovies();

        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
};

module.exports = moviesController;


 */












/* 
const moviesService = require("../services/moviesService");

module.exports = {
    getAllMovies: async (req,res) => {
        console.log("llego getAllMovies moviesController")
        const movies = await moviesService.getAllMovies();
        res.status(200).json(movies);
    },

    createMovie: async (req,res) => {
        console.log("llego createMovies moviesController")
        const { title, year , director , duration , genre , rate , poster } = req.body;
        const newMovie = await moviesService.createMovie ( {title, year , director , duration , genre , rate , poster });
        res.status(201).json(newMovie);
    },
};
 */

const moviesService = require("../services/moviesService");

module.exports = {
    getAllMovies: async (req, res) => {
        console.log("llego getAllMovies moviesController");
        const movies = await moviesService.getAllMovies();
        res.status(200).json(movies);
    },

    createMovie: async (req, res) => {
        console.log("llego createMovies moviesController");
        const { title, year, director, duration, genre, rate, poster } = req.body;
        try {
            const newMovie = await moviesService.createMovie({ title, year, director, duration, genre, rate, poster });
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    posteMovie: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster }= req.body;
            const movieCreated = await moviesService.postMovie({
                title,
                year,
                director,
                duration,
                genre,
                rate,
                poster,
            
            });
            res.status(201).json({error: false,data: movieCreated})
        } catch (error) {
            res.status(500).json({ error: true, message: error.message });
        }
    },
};
