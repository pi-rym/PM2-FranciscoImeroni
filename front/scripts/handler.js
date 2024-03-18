const getFilms = async () => {
    try {
        const {data} = await axios.get("https://students-api.2.us-1.fl0.io/movies")
        console.log(data);
        data.forEach(renderFilms)
    } catch (error) {
        console.log(error.message);
    }
} 