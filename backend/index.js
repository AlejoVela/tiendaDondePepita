const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./db/db");
require("dotenv").config();
//rutas
const Producto = require("./routes/producto");
const Almacen = require("./routes/almacen");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/producto", Producto);
app.use("/api/almacen", Almacen);

app.listen(
    process.env.PORT,
    console.log("Backend is currently running on port " + process.env.PORT)
);

dbConnect();