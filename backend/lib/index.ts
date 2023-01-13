import express from "express";
import { MongoConnection } from "./db/mongoDB";
import "dotenv/config";
import allRoutes from "./routes/routes";

const app = express();

app.use(express.json());

allRoutes(app);

const PORT = process.env.APP_PORT
app.listen(PORT, () => {
  console.log("App is running on port: " + PORT);
  MongoConnection();
});
