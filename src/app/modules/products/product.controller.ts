import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body.student;

    const result = await productServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: "Student is Created Successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

export const productControllers = {
  createProduct,
};
