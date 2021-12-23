const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//get all products from db
//get /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//get product by id from db
//get /api/products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
