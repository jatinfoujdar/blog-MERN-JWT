import express from "express";
import Connection from "./Database/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express()
const port = 4000

app.listen(port, () => {
  console.log(` App listening on port ${port}`)
})
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);