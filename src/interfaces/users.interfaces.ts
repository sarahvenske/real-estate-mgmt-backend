import { DeepPartial, Repository } from "typeorm"
import { z } from "zod"
import { User } from "../entities"
import {
    createUserSchema,
    returnUserSchema,
    returnAllUsersSchema
} from "../schemas"

type IUserRequest = z.infer<typeof createUserSchema>

type IUser = z.infer<typeof returnUserSchema>

type IAllUsers = z.infer<typeof returnAllUsersSchema>

type IUserUpdateRequest = DeepPartial<IUserRequest>

type UserRepository = Repository<User>

export {
    IUserRequest,
    IUser,
    IAllUsers,
    IUserUpdateRequest,
    UserRepository
}
