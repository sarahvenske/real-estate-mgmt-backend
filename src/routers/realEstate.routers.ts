import { Router } from "express";
import {
    createPropertyController,
    listAllPropertiesController
} from "../controllers"

const realEstateRouters: Router = Router()

realEstateRouters.post("", createPropertyController)
realEstateRouters.get("", listAllPropertiesController)

export {
    realEstateRouters
}