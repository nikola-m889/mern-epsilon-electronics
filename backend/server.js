require("dotenv").config();

const express = require("express");
const connectMongoDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectMongoDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running successfully on port number ${PORT}`)
);
