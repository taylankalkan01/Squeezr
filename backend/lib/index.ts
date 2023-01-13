import express from "express";

import "dotenv/config";
import allRoutes from "./routes/routes";

const app = express();

app.use(express.json());

allRoutes(app);

const PORT = process.env.APP_PORT ||3001
app.listen(PORT, () => {
  console.log("App is running on port: " + PORT);
});
