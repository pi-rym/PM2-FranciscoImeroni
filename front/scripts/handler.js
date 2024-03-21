const axios = require("axios");

const getFilms = async () => {
    try {
        const {data} = await axios.get("http://localhost:3000/movies")
        console.log(data);
        data.forEach(renderCards) //antes estaba renderFilms en vez de renderCards pero no cambia nada
    } catch (error) {
        console.log(error.message);
    }
} 

module.exports = getFilms