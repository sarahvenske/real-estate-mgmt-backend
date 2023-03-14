import { Router } from "express";
import {
    createScheduleController,
    listPropertySchedulesController
} from "../controllers"
import { 
    ensureDataIsValidMiddleware, 
    ensureUserIsAdmMiddleware, 
    ensureUserIsAuthMiddleware 
} from "../middlewares";
import { createScheduleSchema } from "../schemas";

const scheduleRouters: Router = Router()

scheduleRouters.post("", ensureUserIsAuthMiddleware, ensureDataIsValidMiddleware(createScheduleSchema), createScheduleController)
scheduleRouters.get("/realEstate/:id", ensureUserIsAuthMiddleware, ensureUserIsAdmMiddleware, listPropertySchedulesController)

export {
    scheduleRouters
}