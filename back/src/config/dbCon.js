const mongoose = require("mongoose");

const dbCon = async () => {
    //conexion con la base dedatos
    await mongoose.connect(URI);
};

module.exports = dbCon;