import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"
import { CategoryRepository } from "../../interfaces"

const listCategoryPropertiesService = async (categoryId: number): Promise<Category> => {

    const categoryRepository: CategoryRepository = AppDataSource.getRepository(Category)

    const findCategoryRealEstates: Category | null = await categoryRepository.findOne({
        relations: {
            realEstate: true
        },
        where: {
            id: categoryId
        }
    })

    if(!findCategoryRealEstates){
        throw new AppError('Category not found', 404)
    }

    return findCategoryRealEstates

}

export {
    listCategoryPropertiesService
}