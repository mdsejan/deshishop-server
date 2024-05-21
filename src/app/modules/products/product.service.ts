import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: Product) => {
  const result = ProductModel.create(product);
  return result;
};

export const productServices = {
  createProductIntoDB,
};
