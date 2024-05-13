import * as z from "zod"

export const SignupSchema = z.object({
    email: z.string().email(
        { message: "Invalid email address" }
    ),

    name: z.string().min(1,
        { message: "Name should not be empty" }
    ),

    password: z.string().min(6,
        { message: "Password should be at least 6 characters long" }
    ),

    confirmPassword: z.string().min(6,
        { message: "Password should be at least 6 characters long" }
    )
})

export const LoginSchema = z.object({
    email: z.string().email(
        { message: "Invalid email address" }
    ),

    password: z.string().min(6,
        { message: "Password should be at least 6 characters long" }
    )
})