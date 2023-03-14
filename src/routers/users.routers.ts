import { Router } from "express";
import {
    createUserController,
    listAllUsersControllers,
    updateUserController,
    softDeleteUserController
} from "../controllers"
import { 
    ensureDataIsValidMiddleware, 
    ensureEmailIsUniqueMiddleware, 
    ensureIdExistsMiddleware, 
    ensureUserIsAdmMiddleware, 
    ensureUserIsAuthMiddleware 
} from "../middlewares";
import { createUserSchema, updateUserSchema } from "../schemas";

const userRouters: Router = Router()

userRouters.post("", ensureDataIsValidMiddleware(createUserSchema), ensureEmailIsUniqueMiddleware, createUserController)
userRouters.get("", ensureUserIsAuthMiddleware, ensureUserIsAdmMiddleware, listAllUsersControllers)
userRouters.patch("/:id", ensureUserIsAuthMiddleware, ensureIdExistsMiddleware, ensureUserIsAdmMiddleware, ensureDataIsValidMiddleware(updateUserSchema), ensureEmailIsUniqueMiddleware, updateUserController)
userRouters.delete("/:id", ensureUserIsAuthMiddleware, ensureIdExistsMiddleware, ensureUserIsAdmMiddleware, softDeleteUserController)

export {
    userRouters
}