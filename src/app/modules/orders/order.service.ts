import { ProductModel } from "../products/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

// Create a new order in the database
const createOrderIntoDB = async (validatedOrderData: Order) => {
  try {
    const result = await OrderModel.create(validatedOrderData);
    return result;
  } catch (error) {
    throw new Error("Failed to create order in the database.");
  }
};

export const orderServices = {
  createOrderIntoDB,
};
