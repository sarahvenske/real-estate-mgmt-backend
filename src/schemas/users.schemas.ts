import { z } from "zod"

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    admin: z.boolean().default(false)
})

const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string().nullish(),
    deletedAt: z.string().nullish()
}).omit({ 
    password: true 
})

const returnAllUsersSchema = z.array(returnUserSchema)

const updateUserSchema = createUserSchema.partial({
    name: true,
    email: true,
    password: true
}).omit({
    admin: true
})

export {
    createUserSchema,
    returnUserSchema,
    returnAllUsersSchema,
    updateUserSchema
}

