import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, { message: "This field has to be filled" }),
  password: z.string().min(1, { message: "This field has to be filled" }),
});
