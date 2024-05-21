import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body.student;
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
