import { Router } from "express";
import {
    createCategoryController,
    listAllCategoriesController,
    listCategoryPropertiesController
} from "../controllers"

const categoryRouters: Router = Router()

categoryRouters.post("", createCategoryController)
categoryRouters.get("", listAllCategoriesController)
categoryRouters.get("/:id/realEstate", listCategoryPropertiesController)

export {
    categoryRouters
}