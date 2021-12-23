const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
  },
  imageSource: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  warranty: {
    type: String,
    required: true,
  },
  shipping: {
    type: String,
    required: true,
  },
  barcode: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
