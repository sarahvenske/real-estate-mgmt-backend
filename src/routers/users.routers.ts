import { Router } from "express";
import {
    createUserController,
    listAllUsersControllers,
    updateUserController,
    softDeleteUserController
} from "../controllers"

const userRouters: Router = Router()

userRouters.post("", createUserController)
userRouters.get("", listAllUsersControllers)
userRouters.patch("/:id", updateUserController)
userRouters.delete("/:id", softDeleteUserController)

export {
    userRouters
}