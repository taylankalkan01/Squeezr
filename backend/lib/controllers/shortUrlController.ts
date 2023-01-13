import { Request, Response } from "express";
import shortUrl from "../models/shortUrl";

const createShortUrl = async (req: Request, res: Response) => {
  const { destination } = req.body;

  try {
    const newUrl = await shortUrl.create({ destination });

    res.status(201).json({
      error: false,
      message: "Short Url is created",
      data: newUrl
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error
    });
  }
};

const getShortUrl = async (req: Request, res: Response) => {
  const { shortId } = req.params;
  try {
    const short = await shortUrl.findOne({ shortId });

    if (!short) {
      res.status(404).json({
        error: true,
        message: "short is not found!"
      });
    } else {
      res.status(200).json({
        error: false,
        message: "",
        data: short
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error
    });
  }
};
const handleRedirect = async (req: Request, res: Response) => {
  const { shortId } = req.params;
  try {
    const short = await shortUrl.findOne({ shortId });
    if (!short) {
      res.status(404).json({
        error: true,
        message: "short is not found!"
      });
    } else {
      return res.redirect(short?.destination || "");
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error
    });
  }
};

export default { createShortUrl, handleRedirect, getShortUrl };
