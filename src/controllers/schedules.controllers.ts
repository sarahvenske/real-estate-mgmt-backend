import { Request, Response } from "express"
import { IScheduleRequest } from "../interfaces"
import {
    createScheduleService,
    listPropertySchedulesService,
} from "../services"

const createScheduleController = async (req: Request, res: Response) => {

    const userId: number = req.user.id
    const scheduleData: IScheduleRequest = req.body
    
    const schedule = await createScheduleService(userId, scheduleData)
    
    return res.status(201).json(schedule)

}

const listPropertySchedulesController = async (req: Request, res: Response) => {
    
    const realEstateId: number = parseInt(req.params.id)
    const realEstateSchedules = await listPropertySchedulesService(realEstateId)
    
    return res.status(200).json(realEstateSchedules)

}

export {
    createScheduleController,
    listPropertySchedulesController
}