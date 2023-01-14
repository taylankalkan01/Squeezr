import axios from "axios";
import { BASE_URL } from "../config/index";

export const createShortUrl = async (destination) => {
  return await axios.post(`${BASE_URL}/api/url`, {
    destination,
  });
};

export const handleRedirect = async (shortId) => {
  return await axios.get(`${BASE_URL}/api/url/${shortId}`, {
    shortId,
  });
};
