import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

// Create a new product
const createProductIntoDB = async (product: Product) => {
  const result = ProductModel.create(product);
  return result;
};

// Retrieve all Products
const getAllProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// Retrieve a specific product by ID
const getProductByIdFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByIdFromDB,
};
