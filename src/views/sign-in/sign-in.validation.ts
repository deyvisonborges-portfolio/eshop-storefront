import { z } from "zod";
const invalidTypeError = "Invalid type provided for this field";
const requiredError = "This field cannot be blank";

const defaultErrors = {
  invalid_type_error: invalidTypeError,
  required_error: requiredError,
};

export const SignInSchemaValidation = z.object({
  email: z
    .string(defaultErrors)
    .email("Please provide a valid email")
    .min(1, "Value is too short"),

  password: z.string(defaultErrors).min(6, "Password is too short"),
});
