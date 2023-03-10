import {
    createScheduleService,
    listPropertySchedulesService,
} from "../services"

const createScheduleController = () => {
    createScheduleService()
}

const listPropertySchedulesController = () => {
    listPropertySchedulesService()
}

export {
    createScheduleController,
    listPropertySchedulesController
}