import mongoose from "mongoose";
import express from "express";
const productRoute = express.Router();

// Assuming Product is your mongoose model
import Product from "../model/product.model.js"

productRoute.post('/product', async (req, res) => {
    try {
        const singleProduct = req.body;
        console.log(singleProduct);

        // Check if the product exists in the database
        const result = await Product.findOne({ name: singleProduct.name });
        if (result) {
            return res.send({ message: "Product is available in the database" });
        }

        // If not, create a new instance of Product and save it
        const newProduct = new Product(singleProduct);
        await newProduct.save();
        res.send("Product added successfully");
    } catch (error) {
        res.send({ message: error.message });
    }
});

export default productRoute;
