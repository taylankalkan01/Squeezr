import { z } from "zod";

const schema = z.object({
  body: z.object({
    destination: z
      .string({ required_error: "Destination is required" })
      .url({ message: "Must be a valid URL" })
  })
});

export default schema;
