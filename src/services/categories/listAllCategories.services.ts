import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { CategoryRepository, ICategory } from "../../interfaces"

const listAllCategoriesService = async (): Promise<ICategory[]> => {
    
    const categoryRepository: CategoryRepository = AppDataSource.getRepository(Category)

    const categories: Array<ICategory> = await categoryRepository.find()

    return categories

}

export {
    listAllCategoriesService
}