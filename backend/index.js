import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import connection from "./config/db.js"
import productRoute from "./routes/product.route.js";

const app = express();
const port = process.env.PORT || 3000;

// middleware 
app.use(express.json());
app.use("/products", productRoute)

app.get("/", (req, res) => {
  try {
    res.send("Welcome to home!");
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
});


app.listen(port, async (req, res) => {
    try {
        await connection();
        console.log(`server listening on ${port}`)
    } catch (error) {
        console.log("server not started", error.message)
    }
})
