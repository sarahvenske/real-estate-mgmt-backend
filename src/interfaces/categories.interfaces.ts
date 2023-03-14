import { Repository } from "typeorm"
import { z } from "zod"
import { Category } from "../entities"
import { createCategorySchema, returnCategorySchema } from "../schemas"

type ICategoryRequest = z.infer<typeof createCategorySchema>

type ICategory = z.infer<typeof returnCategorySchema>

type CategoryRepository = Repository<Category>

export {
    ICategoryRequest,
    ICategory,
    CategoryRepository
}