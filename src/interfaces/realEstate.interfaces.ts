import { Repository } from "typeorm"
import { z } from "zod"
import { RealEstate } from "../entities"
import { createRealEstateSchema } from "../schemas"

type IRealEstateRequest = z.infer<typeof createRealEstateSchema>

type RealEstateRepository = Repository<RealEstate>

export {
    IRealEstateRequest,
    RealEstateRepository
}