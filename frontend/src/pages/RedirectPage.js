import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import { Spinner, Box } from "@chakra-ui/react";
import { handleRedirect } from "../services/index";

export default function HandleRedirectContainer() {
  const [destination, setDestination] = useState();
  const [error, setError] = useState();

  const {
    params: { shortId },
  } = useResolvedPath();

  useEffect(() => {
    handleRedirect(shortId)
      .then((res) => setDestination(res.data.destination))
      .catch((error) => {
        setError(error.message);
      });
  }, [shortId]);

  useEffect(() => {
    if (destination) {
      window.location.replace(destination);
    }
  }, [destination]);

  if (!destination && !error) {
    return (
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Box>
    );
  }

  return <p>{error && JSON.stringify(error)}</p>;
}
