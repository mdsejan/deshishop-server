import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.join(process.cwd(), ".env") });
}

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
