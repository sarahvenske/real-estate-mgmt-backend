import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { RealEstateRepository } from "../../interfaces"

const listPropertySchedulesService =  async (realEstateId: number): Promise<RealEstate> => {

    const realEstateRepository: RealEstateRepository = AppDataSource.getRepository(RealEstate)

    const findRealEstateSchedules = await realEstateRepository.createQueryBuilder("real_estate")
    .innerJoinAndSelect("real_estate.address", "address")
    .leftJoinAndSelect("real_estate.schedules", "schedule")
    .leftJoinAndSelect("schedule.user", "user.id")
    .leftJoinAndSelect("real_estate.category", "category")
    .where("real_estate.id = :id", { id: realEstateId })
    .getOne()

    if(!findRealEstateSchedules){
        throw new AppError("RealEstate not found", 404)
    }

    return findRealEstateSchedules

}

export {
    listPropertySchedulesService
}