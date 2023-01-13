import express, { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
const validateURL =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      });

      next();
    } catch (e) {
      return res.status(400).send(e);
    }
  };

export default validateURL;
