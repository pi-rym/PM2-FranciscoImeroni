require("dotenv").config();
const { PORT } = process.env;
const app = require("./src/server");
const dbCon = require("./src/config/dbCon")

dbCon().then(
    res=>{
        app.listen(PORT, () => {
            console.log('servidor escuchando el puerto 3000');
        });
    }
)