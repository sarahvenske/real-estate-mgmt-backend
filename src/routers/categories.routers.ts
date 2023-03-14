import { Router } from "express";
import {
    createCategoryController,
    listAllCategoriesController,
    listCategoryPropertiesController
} from "../controllers"
import { 
    ensureDataIsValidMiddleware, 
    ensureUserIsAdmMiddleware, 
    ensureUserIsAuthMiddleware 
} from "../middlewares";
import { createCategorySchema } from "../schemas";

const categoryRouters: Router = Router()

categoryRouters.post("", ensureUserIsAuthMiddleware, ensureUserIsAdmMiddleware, ensureDataIsValidMiddleware(createCategorySchema), createCategoryController)
categoryRouters.get("", listAllCategoriesController)
categoryRouters.get("/:id/realEstate", listCategoryPropertiesController)

export {
    categoryRouters
}