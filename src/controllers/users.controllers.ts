import { Request, Response } from "express"
import { IUserRequest, IUserUpdateRequest } from "../interfaces"
import {
    createUserService,
    listAllUsersService,
    updateUserService,
    softDeleteUserService
} from "../services"


const createUserController = async (req: Request, res: Response) => {
    
    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)
    
    return res.status(201).json(newUser)

}

const listAllUsersControllers = async (req: Request, res: Response) => {
    
    const users = await listAllUsersService()

    return res.status(200).json(users)
    
}

const updateUserController = async (req: Request, res: Response) => {

    const userId = parseInt(req.params.id)
    const updateData: IUserUpdateRequest = req.body
    const updatedUser = await updateUserService(userId, updateData)

    return res.status(200).json(updatedUser)

}

const softDeleteUserController = async (req: Request, res: Response) => {

    const userId = parseInt(req.params.id)
    await softDeleteUserService(userId)

    return res.status(204).send()

}

export {
    createUserController,
    listAllUsersControllers,
    updateUserController,
    softDeleteUserController
}