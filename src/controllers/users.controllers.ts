import {
    createUserService,
    listAllUsersService,
    updateUserService,
    softDeleteUserService
} from "../services"


const createUserController = () => {
    createUserService()
}

const listAllUsersControllers = () => {
    listAllUsersService()
}

const updateUserController = () => {
    updateUserService()
}

const softDeleteUserController = () => {
    softDeleteUserService()
}

export {
    createUserController,
    listAllUsersControllers,
    updateUserController,
    softDeleteUserController
}