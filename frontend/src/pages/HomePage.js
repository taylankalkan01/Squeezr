import { Box } from "@chakra-ui/react";
import UrlShortenerForm from "../components/UrlShortenerForm";
import Background from "../components/BackgroundImg";

export default function HomePage() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <UrlShortenerForm />
      <Background />
    </Box>
  );
}
