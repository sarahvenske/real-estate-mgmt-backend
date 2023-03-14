import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"
import { returnCategorySchema } from "../../schemas"
import { 
    CategoryRepository, 
    ICategory, 
    ICategoryRequest
} from "../../interfaces"

const createCategoryService = async (categoryData: ICategoryRequest): Promise<ICategory> => {

    const categoryRepository: CategoryRepository = AppDataSource.getRepository(Category)

    const findCategory: Category | null = await categoryRepository.findOneBy({
            name: categoryData.name
    })

    if(findCategory){
        throw new AppError("Category already exists", 409) 
    }

    const category = categoryRepository.create(categoryData)

    await categoryRepository.save(category)

    const newCategory = returnCategorySchema.parse(category)
   
    return newCategory

}

export {
    createCategoryService
}