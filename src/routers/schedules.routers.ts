import { Router } from "express";
import {
    createScheduleController,
    listPropertySchedulesController
} from "../controllers"

const scheduleRouters: Router = Router()

scheduleRouters.post("", createScheduleController)
scheduleRouters.get("/realEstate/:id", listPropertySchedulesController)

export {
    scheduleRouters
}