import { z } from 'zod'

export const signInFormSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email({
        message: 'Must be a valid email',
    }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters' }),
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>
