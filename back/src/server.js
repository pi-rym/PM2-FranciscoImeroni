const express = require("express");
const router = require ("./routes/index")
const morgan = require("morgan");
const cors = require ("cors");

const app = express();

app.use(morgan("dev")); // middelware pre-build
app.use(cors());        // middelware pre-build
app.use(express.json());// middelware pre-build

app.use((req,res,next) => { // middelware personalizado
    console.log("propio middelware");
    next(); //libera a la req de el este middelware para que siga su camino
});

app.use(router);

module.exports = app;