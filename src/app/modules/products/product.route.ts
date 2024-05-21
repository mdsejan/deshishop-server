import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

// Product Management API's
router.post("/products", productControllers.createProduct);
router.get("/products", productControllers.getAllProducts);

export const ProductRoutes = router;
