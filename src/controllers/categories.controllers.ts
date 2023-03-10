import {
    createCategoryService,
    listAllCategoriesService,
    listCategoryPropertiesService
} from "../services"

const createCategoryController = () => {
    createCategoryService()
}

const listAllCategoriesController = () => {
    listAllCategoriesService()
}

const listCategoryPropertiesController = () => {
    listCategoryPropertiesService()
}

export {
    createCategoryController,
    listAllCategoriesController,
    listCategoryPropertiesController
}