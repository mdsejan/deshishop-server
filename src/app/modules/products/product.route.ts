import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

// Product Management route
router.post("/products", productControllers.createProduct);
router.get("/products", productControllers.getAllProducts);
router.get("/products/:productId", productControllers.getProductById);
router.put("/products/:productId", productControllers.updateProduct);
router.delete("/products/:productId", productControllers.productDelete);

export const ProductRoutes = router;
