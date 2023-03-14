import { Repository } from "typeorm"
import { z } from "zod"
import { Schedule } from "../entities"
import { createScheduleSchema } from "../schemas"

type IScheduleRequest = z.infer<typeof createScheduleSchema>

type ScheduleRepository = Repository<Schedule>

export {
    IScheduleRequest,
    ScheduleRepository
}