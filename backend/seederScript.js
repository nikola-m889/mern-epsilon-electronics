require("dotenv").config();

const productsData = require("./data/products");
const connectMongoDB = require("./config/db");
const Product = require("./models/Product");

connectMongoDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log("Data successfuly imported");

    process.exit();
  } catch (error) {
    console.error("Data failed to import");
    process.exit(1);
  }
};

importData();
