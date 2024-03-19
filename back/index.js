require("dotenv").config();
const { PORT } = process.env;
const app = require("./src/server");

app.listen(PORT, () => {
    console.log('servidor escuchando el puerto ${PORT}');
});