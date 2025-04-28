//server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const dotenv = require("dotenv");
const Route = require("./router")

app.use(express.json());
dotenv.config();

const PORT = 3030;
app.use("/",Route);

app.get("/",(req,res)=>{
  res.status(200).send("Pong")
});

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(() => {
 app.listen(PORT,()=>{
    console.log("DB is connected successfully");
    console.log(`The server is running on https://localhost:${PORT}`);
 }) 
}).catch((err) => {
    res.status(500).send("Something went wrong",err)
    console.log("Something went wrong",err);
});