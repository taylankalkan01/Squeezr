import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
export default function Error() {
  return (
    <Alert status="error" style={{ display: "flex", justifyContent: "center" }}>
      <AlertIcon />
      <AlertTitle>OPPPSS!!!</AlertTitle>
      <AlertDescription>
        We can't seem to find the page you're looking for.
      </AlertDescription>
    </Alert>
  );
}
