const getFilms = async () => {
    try {
        const {data} = await axios.get("https://students-api.up.railway.app/movies")
        console.log(data);
        data.forEach(renderFilms)
    } catch (error) {
        console.log(error.message);
    }
} 

module.exports = getFilms