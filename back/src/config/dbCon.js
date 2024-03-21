const mongoose = require("mongoose");

const dbCon = async () => {
    //conexion con la base dedatos
    await mongoose.connect("mongodb+srv://franciscoimeroni:morena007@proyectoprueba.sp2lfgq.mongodb.net/movies");
};

module.exports = dbCon;