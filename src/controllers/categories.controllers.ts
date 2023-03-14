import { Request, Response } from "express"
import { ICategoryRequest } from "../interfaces"
import {
    createCategoryService,
    listAllCategoriesService,
    listCategoryPropertiesService
} from "../services"

const createCategoryController = async (req: Request, res: Response) => {

    const categoryData: ICategoryRequest = req.body
    const newCategory = await createCategoryService(categoryData)
    
    return res.status(201).json(newCategory)
    
}

const listAllCategoriesController = async (req: Request, res: Response) => {

    const categories = await listAllCategoriesService()
   
    return res.status(200).json(categories)
 
}

const listCategoryPropertiesController =  async (req: Request, res: Response) => {
    
    const categoryId: number = parseInt(req.params.id)
    const realEstates = await listCategoryPropertiesService(categoryId)
   
    return res.status(200).json(realEstates)

}

export {
    createCategoryController,
    listAllCategoriesController,
    listCategoryPropertiesController
}