const moviesService = require("../services/moviesService");

module.exports = {
    createMovie: async (req, res) => {
        try {
            const newMovie = req.body; // Se supone que el cuerpo de la solicitud contiene los datos de la nueva película
            await moviesService.createMovie(newMovie); // Llamar al método del servicio para crear la película
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
