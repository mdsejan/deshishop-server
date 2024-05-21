import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

// Create a new product
const createProductIntoDB = async (product: Product) => {
  const result = ProductModel.create(product);
  return result;
};

// Retrieve all Products
const getAllProductFromDB = async (searchTerm: string | undefined) => {
  let products;

  if (searchTerm) {
    const searchRegex = new RegExp(searchTerm as string, "i");

    products = await ProductModel.find({
      $or: [
        { name: searchRegex },
        { description: searchRegex },
        { category: searchRegex },
        { tags: searchRegex },
      ],
    });
  } else {
    products = await ProductModel.find();
  }

  return products;
};

// Retrieve a specific product by ID
const getProductByIdFromDB = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};

// Update Product Information

const updateProductIntoDB = async (
  id: string,
  updateProductIntoDB: Product
) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateProductIntoDB, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete Product
const productDeleteFromDB = async (deleteId: string) => {
  const result = await ProductModel.findByIdAndDelete(deleteId);
  return result;
};

export const productServices = {
  createProductIntoDB,
  getProductFromDB: getAllProductFromDB,
  getProductByIdFromDB,
  updateProductIntoDB,
  productDeleteFromDB,
};
