import mongoose from "mongoose";
import express from "express";
const productRoute = express.Router();

// Assuming Product is your mongoose model
import Product from "../model/product.model.js";

// Get all products
productRoute.get("/allProducts", async (req, res) => {
  try {
    let result = await Product.find();
    if (result.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching products",
      error: error.message,
    });
  }
});

// get Single Product 
productRoute.post("/singleProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);

    // Find the product by ID
    const productData = await Product.findById(id);

    if (!productData) {
      return res.status(404).send("Product ID not found in the database. Please provide the correct ID.");
    }

    res.status(200).send(productData);
  } catch (error) {
    res.status(500).send({ message: "An error occurred while retrieving the product. Please try again later." });
  }
});


// Add a new product
productRoute.post("/product", async (req, res) => {
  try {
    const singleProduct = req.body;

    // Check if the product exists in the database
    const existingProduct = await Product.findOne({ name: singleProduct.name });
    if (existingProduct) {
      return res
        .status(409)
        .json({ message: "Product already exists in the database" });
    }

    // If not, create a new instance of Product and save it
    const newProduct = new Product(singleProduct);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while adding the product",
      error: error.message,
    });
  }
});

export default productRoute;
