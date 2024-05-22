import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.route";
import { OrderRoutes } from "./app/modules/orders/order.route";

const app = express();

app.use(express.json());
app.use(cors({ origin: "https://deshishop.vercel.app/" }));

// application routes
app.use("/api", ProductRoutes);
app.use("/api", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running");
});

export default app;
