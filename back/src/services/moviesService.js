/* const movies =                 [
        {
                "title": "Guardians of the Galaxy Vol. 2",
                "year": 2017,
                "director": "James Gunn",
                "duration": "2h 16min",
                "genre": [
                        "Action",
                        "Adventure",
                        "Comedy"
                ],
                "rate": 7.7,
                "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
        },
        {
                "title": "Star Wars: Episode IV - A New Hope",
                "year": 1977,
                "director": "George Lucas",
                "duration": "2h 1min",
                "genre": [
                        "Action",
                        "Adventure",
                        "Fantasy",
                        "Sci-Fi"
                ],
                "rate": 8.7,
                "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
        },
        {
                "title": "The Lord of the Rings: The Fellowship of the Ring",
                "year": 2001,
                "director": "Peter Jackson",
                "duration": "2h 58min",
                "genre": [
                        "Action",
                        "Adventure",
                        "Drama",
                        "Fantasy"
                ],
                "rate": 8.8,
                "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
        }
]

const newMovie = {
        "title": "Título de la nueva película",
        "year": 2022,
        "director": "Director de la nueva película",
        "duration": "2h 30min",
        "genre": [
            "Género 1",
            "Género 2"
        ],
        "rate": 7.5,
        "poster": "URL del póster de la nueva película"
    };
    



module.exports = {

        getAllMovies: async (req,res) => {
                try {
                    const movies = await moviesService.getMovies();
                    res.status(200).jason(movies);
                } catch (error) {
                    res.status(500).json({
                        error: "error interno del servidor",
                    });
                }
            },
        
        createMovie: async (req,res) => {
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
                    
                };
        
            },

        getMovies: async () => {
                return movies;
        },

}; */









/* const movies = [
    {
        "title": "Guardians of the Galaxy Vol. 2",
        "year": 2017,
        "director": "James Gunn",
        "duration": "2h 16min",
        "genre": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "rate": 7.7,
        "poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
    },
    {
        "title": "Star Wars: Episode IV - A New Hope",
        "year": 1977,
        "director": "George Lucas",
        "duration": "2h 1min",
        "genre": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
        ],
        "rate": 8.7,
        "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "director": "Peter Jackson",
        "duration": "2h 58min",
        "genre": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "rate": 8.8,
        "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
    }
]; */




/* //este bloque hace crashear a la app, si descommento lo de arriba anda, pero antes de solucionarlo fijate de hacer lo de la bae de datos
const axios = require('axios');

//const moviesAPI = "https://students-api.up.railway.app/movies"

const getMoviesData = async () => {
    try {
        // Realizar la solicitud GET al API
        const response = await axios.get("https://students-api.up.railway.app/movies");

        // Retornar los datos de las películas desde la respuesta del API
        return response.data;
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error al obtener los datos de las películas:', error.message);
        throw error; // Relanzar el error para manejarlo en otro lugar si es necesario
    }
};

// Llamar a la función para obtener los datos de las películas y asignarlos a una constante
const movies = await getMoviesData();



let movies;





module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const {data} = await axios.get("https://students-api.up.railway.app/movies"); //BASE_URL
            return data;
        } catch (error) {
            throw new Error(error);
        }
    },
    


/*     createMovie: async (req, res) => {
        try {
            movies.push(newMovie);
            res.status(201).json({
                message: "Pelicula creada correctamente",
            });
        } catch (error) {
            res.status(500).json({
                error: "error al crear pelicula",
            });
        }
    }, */

/*     createMovie: async (newMovie) => {

            // Validar que se proporcionen todos los campos requeridos
            if (!newMovie.title || !newMovie.year || !newMovie.director || !newMovie.genre || !newMovie.rate || !newMovie.poster) {
                throw new Error("Todos los campos son obligatorios");
            }
    
            // Validar que el año sea un número válido
            if (typeof newMovie.year !== 'number' || newMovie.year < 1900 || newMovie.year > new Date().getFullYear()) {
                throw new Error("Año de la película no válido");
            }
    
            // Realizar cualquier otro tipo de validación que necesites
    
            // Procesar la duración de la película
            if (newMovie.duration) {
                // Aquí podrías realizar cualquier tipo de procesamiento de la duración, como convertir de horas a minutos, por ejemplo
            }
    
            // Agregar la película a la lista de películas
            movies.push(newMovie);
    },
};
 */


const axios = require('axios');

const getMoviesData = async () => {
    try {
        // Realizar la solicitud GET al API
        const response = await axios.get("https://students-api.up.railway.app/movies");

        // Retornar los datos de las películas desde la respuesta del API
        return response.data;
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud
        console.error('Error al obtener los datos de las películas:', error.message);
        throw error; // Relanzar el error para manejarlo en otro lugar si es necesario
    }
};

let movies; // Definir la variable fuera de la función async

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            if (!movies) { // Verificar si las películas aún no se han cargado
                movies = await getMoviesData(); // Cargar las películas si no están disponibles
            }
            return movies;
        } catch (error) {
            throw new Error(error);
        }
    },

    createMovie: async (newMovie) => {

        // Validar que se proporcionen todos los campos requeridos
        if (!newMovie.title || !newMovie.year || !newMovie.director || !newMovie.genre || !newMovie.rate || !newMovie.poster) {
            throw new Error("Todos los campos son obligatorios");
        }

        // Validar que el año sea un número válido
        if (typeof newMovie.year !== 'number' || newMovie.year < 1900 || newMovie.year > new Date().getFullYear()) {
            throw new Error("Año de la película no válido");
        }

        // Realizar cualquier otro tipo de validación que necesites

        // Procesar la duración de la película
        if (newMovie.duration) {
            // Aquí podrías realizar cualquier tipo de procesamiento de la duración, como convertir de horas a minutos, por ejemplo
        }

        // Agregar la película a la lista de películas
        movies.push(newMovie);
}};
