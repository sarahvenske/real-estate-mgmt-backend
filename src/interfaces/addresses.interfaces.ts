import { Repository } from "typeorm"
import { z } from "zod"
import { Address } from "../entities"
import { createAddressSchema } from "../schemas"

type IAddressRequest = z.infer<typeof createAddressSchema >

type AddressRepository = Repository<Address>

export {
    IAddressRequest,
    AddressRepository
}