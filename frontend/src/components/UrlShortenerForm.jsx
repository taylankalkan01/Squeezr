import React, { useState } from "react";
import { Input, Button, Box, InputGroup } from "@chakra-ui/react";
import { createShortUrl } from "../services/index";
import { BASE_URL } from "../config/index";

export default function UrlShortenerForm() {
  const [destination, setDestination] = useState();
  const [shortUrl, setShortUrl] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    await createShortUrl(destination).then((res) => {
      if (res.status === 201) {
        setShortUrl(res.data);
        setDestination("");
      }
    });
  }
  return (
    <Box pos="relative" zIndex="2" backgroundColor="white" padding="6">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            placeholder="https://example.com"
          />
          <Button type="submit">CREATE</Button>
        </InputGroup>
      </form>
      {shortUrl && (
        <a href={`${BASE_URL}/${shortUrl?.data?.shortId}`}>
          Your short url is:{shortUrl?.data?.shortId}
        </a>
      )}
    </Box>
  );
}
