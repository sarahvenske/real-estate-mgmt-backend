import { number, union, z } from "zod"
import { createAddressSchema } from "./addresses.schemas"

const createRealEstateSchema = z.object({
    value: union([
        z.string().min(0).max(9999999999.99).transform((val) => parseFloat(val).toFixed(2)),
        z.number().min(0).max(9999999999.99).transform((val) => parseFloat(val.toFixed(2))),
      ]),
    size: z.number().int().positive(),
    address: createAddressSchema,
    categoryId: number()
})

export {
    createRealEstateSchema
}
    
