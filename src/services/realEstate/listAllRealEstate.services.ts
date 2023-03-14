import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { RealEstateRepository } from "../../interfaces"

const listAllRealEstateService = async (): Promise<RealEstate[]> => {

    const realEstateRepository: RealEstateRepository = AppDataSource.getRepository(RealEstate)

    const listRealEstates = await realEstateRepository.find({
        relations: {
            address: true
        }
    })

    return listRealEstates

}

export { 
    listAllRealEstateService
}