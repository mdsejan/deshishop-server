import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

// Product Management API's
router.post("/products", productControllers.createProduct);
router.get("/products", productControllers.getAllProducts);
router.get("/products/:productId", productControllers.getProductById);

export const ProductRoutes = router;
