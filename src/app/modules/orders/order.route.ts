import express from "express";
import { orderControllers } from "./order.controller";

const router = express.Router();

// Order Management route
router.post("/", orderControllers.createOrder);

export const OrderRoutes = router;
