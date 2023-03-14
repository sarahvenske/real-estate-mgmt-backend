import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { AddressRepository, CategoryRepository, IAddressRequest, IRealEstateRequest, RealEstateRepository } from "../../interfaces"

const createRealEstateService = async (realEstateData: IRealEstateRequest): Promise<RealEstate> => {

    const addressRepository: AddressRepository = AppDataSource.getRepository(Address)
    const addressData: IAddressRequest = realEstateData.address

    if(addressData.number){
    
        const findAddress: Address | null = await addressRepository.findOne({
          where:{
              street: addressData.street,
              zipCode: addressData.zipCode,
              number: addressData.number, 
              city: addressData.city,
              state: addressData.state
          }
        })
      
        if(findAddress){
          throw new AppError("Address already exists", 409)
        }
    }

    const newAddress = addressRepository.create(addressData)
    await addressRepository.save(newAddress)

    const categoryRepository: CategoryRepository = AppDataSource.getRepository(Category)
    const categoryId: number = realEstateData.categoryId

    const findCategory: Category | null = await categoryRepository.findOneBy({
        id: categoryId
    })

    if(!findCategory){
        throw new AppError("Category not found", 404) 
    }
    
    const realEstateRepository: RealEstateRepository = AppDataSource.getRepository(RealEstate)

    const newRealEstate = realEstateRepository.create({
        size: realEstateData.size,
        value: realEstateData.value,
        address: newAddress,
        category: findCategory
    })

    await realEstateRepository.save(newRealEstate)
    
    return newRealEstate

}

export { 
    createRealEstateService
}