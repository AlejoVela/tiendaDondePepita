const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./db/db");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(
    process.env.PORT,
    console.log("Backend is currently running on port " + process.env.PORT)
);

dbConnect();