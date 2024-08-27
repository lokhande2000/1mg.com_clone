import mongoose from "mongoose";

// Schema for Combo Offers
const comboOfferSchema = new mongoose.Schema({
  pack: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
});

// Schema for Product
const productSchema = new mongoose.Schema({
  heading: { type: String, default: "Top deals of pain relief and cough & cold" },
  url: [String],
  category: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: { type: Number },
  ratings: {
    type: Number,
    required: true,
    default:3.4
  },
  reviews: {
    type: String,
    required: false,
    default: "I've been using Swisse Beauty Vegan Collagen Builder for a month, and I'm really impressed with the results. My skin feels more supple and youthful. The addition of biotin and vitamin C is a great bonus, providing extra antioxidant support"
  },
  highlights: {
    type: [String], // Array of strings
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  comboOffers: [comboOfferSchema], // Array of combo offers
},{
    versionKey: false
});

const Product = mongoose.model("Product", productSchema);

export default Product;
