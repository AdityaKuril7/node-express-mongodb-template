import z from "zod";

export const signupValidation = z.object({
  username: z
    .string()
    .min(2, "Username must be greater then 2 characters.")
    .max(30, "Username must be less then 30 characters."),
  email: z.email(),
  password: z.string().min(8, "Password must be greater then 8 characters."),
});

export const loginValidation = z.object({
  email: z.email(),
  password: z.string().min(8, "Password must be greater then 8 characters."),
});
