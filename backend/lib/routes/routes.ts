import { Express, Request, Response } from "express";
import controllers from "../controllers/shortUrlController";
import validation from "../middleware/validation";
// import shortUrlSchema from "../schemas/createShortUrl.schema";

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("SQUEEZR");
  });
  app.post("/api/url", controllers.createShortUrl);

  app.get("/:shortId", controllers.handleRedirect);

  app.get("/api/url/:shortId", controllers.getShortUrl);
}

export default routes;
