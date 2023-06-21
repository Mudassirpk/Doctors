import { z, ZodType } from "zod";
import type { iUserSignUp, iUserLogin, iBookingForm } from "./../types";
export const user_signup_schema: ZodType<iUserSignUp> = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name should be greater than 2 characters" })
      .max(30, "Name should be less than 30 characters"),
    email: z.string().email(),
    phone: z
      .string()
      .min(7, { message: "Invalid phone number" })
      .max(15, { message: "Invalid phone number" }),
    address: z
      .string()
      .refine(
        (value) => /^[\w\s]+(?:\s*,\s*[\w\s]+){2}$/.test(value) === true,
        {
          message:
            "Invalid address format the addres should be like Country, State, City",
        }
      ),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long" })
      .max(20, { message: "Password should be at max 20 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password should be at least 8 characters long" })
      .max(20, { message: "Password should be at max 20 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export const userLoginSchema: ZodType<iUserLogin> = z.object({
  email: z.string().email(),
  password: z.string(),
});

// booking form schema

export const BookingFormSchema: ZodType<iBookingForm> = z.object({
  pName: z.string().min(2),
  pAge: z.number().min(1).max(70),
  symptoms: z.string(),
});
