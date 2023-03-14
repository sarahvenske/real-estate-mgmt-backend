import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../errors"
import { IScheduleRequest, RealEstateRepository, ScheduleRepository, UserRepository } from "../../interfaces"

const createScheduleService = async (userId: number, scheduleData: IScheduleRequest): Promise<{ message: string }> => {

    // Verificação se o Real Estate Existe:

    const realEstateRepository: RealEstateRepository = AppDataSource.getRepository(RealEstate)
    const realEstateId: number = scheduleData.realEstateId
    
    const findRealEstate: RealEstate | null = await realEstateRepository.findOne({
        where: {
            id: realEstateId
        }
    }) 
    
    if(!findRealEstate){
        throw new AppError("RealEstate not found", 404)
    }


// Schedule no Real Estate com mesma data e hora existente:

    const date = scheduleData.date
    const hour = scheduleData.hour

    const scheduleRepository: ScheduleRepository = AppDataSource.getRepository(Schedule)

    const scheduleAlreadyExists: Schedule | null = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.hour = :hour", { hour })
    .andWhere("schedule.hour = :hour", { hour })
    .andWhere("schedule.realEstate.id = :realEstateId", { realEstateId })
    .getOne()

    if(scheduleAlreadyExists){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }


// Schedule dias úteis (seg-sex):

    const formatedDate = new Date(date)

    if(formatedDate.getUTCDay() === 0 || formatedDate.getUTCDay() === 6 || formatedDate.getUTCDay() === 7 ) {
        throw new AppError("Invalid date, work days are monday to friday", 400);
      }
    

// Schedule horário comercial (08:00 - 18:0 ):
      
    const splitHour = hour.split(":")
    const workingHours = ["08", "18"]
      
    if(splitHour[0] < workingHours[0] || splitHour[0] > workingHours[1]){
            throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
    }


// User já possui schedule no mesmo horário:

    const verifyUserSchedules = await scheduleRepository.createQueryBuilder("schedule")
    .where("schedule.hour = :hour", { hour })
    .andWhere("schedule.user = :userId", { userId })
    .getOne()

    if(verifyUserSchedules){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }


// Novo schedule para o Real Estate:
   
    const userRepository: UserRepository = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    const newSchedule: Schedule = scheduleRepository.create({
        date: date,
        hour: hour,
        user: findUser!,
        realEstate: findRealEstate
    })

    await scheduleRepository.save(newSchedule)

    return {
        message: "Schedule created"
    }

}

export {
    createScheduleService
}