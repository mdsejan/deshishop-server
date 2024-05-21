import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.route";

const app = express();

app.use(express.json());
app.use(cors({ origin: "https://deshishop.vercel.app/" }));

// application routes
app.use("/api", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  const a = 10;
  console.log(a);
  res.send("Server Running");
});

export default app;
