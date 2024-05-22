import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { orderServices } from "./order.service";
import { productServices } from "../products/product.service";

// Create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const validatedOrderData = orderValidationSchema.parse(orderData);
    const { productId, quantity } = validatedOrderData;

    const product = await productServices.getProductByIdFromDB(productId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    if (product.inventory.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();

    const result = await orderServices.createOrderIntoDB(validatedOrderData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create order.",
      error: error,
    });
  }
};

export const orderControllers = {
  createOrder,
};
