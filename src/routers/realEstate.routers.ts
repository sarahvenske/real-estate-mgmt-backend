import { Router } from "express";
import {
    createPropertyController,
    listAllPropertiesController
} from "../controllers"
import { 
    ensureDataIsValidMiddleware, 
    ensureUserIsAdmMiddleware, 
    ensureUserIsAuthMiddleware 
} from "../middlewares";
import { createRealEstateSchema } from "../schemas";

const realEstateRouters: Router = Router()

realEstateRouters.post("", ensureUserIsAuthMiddleware, ensureUserIsAdmMiddleware, ensureDataIsValidMiddleware(createRealEstateSchema), createPropertyController)
realEstateRouters.get("", listAllPropertiesController)

export {
    realEstateRouters
}