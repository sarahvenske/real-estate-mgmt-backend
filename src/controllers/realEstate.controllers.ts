import {
    createPropertyService,
    listAllPropertiesService,
} from "../services"

const createPropertyController = () => {
    createPropertyService()
}


const listAllPropertiesController = () => {
    listAllPropertiesService()
}

export {
    createPropertyController,
    listAllPropertiesController
}

