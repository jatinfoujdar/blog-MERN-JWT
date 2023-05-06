import express from "express";
import Connection from "./Database/db.js";


const app = express()
const port = 4000




app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})

Connection();