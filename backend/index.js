import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser"
dotenv.config();

const app = express()
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const DB_CONN = process.env.DB;
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_CONN).then(() => app.listen(PORT, () => console.log(`Server running at ${PORT}`))).catch((err) => console.log(err));
