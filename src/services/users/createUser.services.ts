import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUser, IUserRequest, UserRepository } from "../../interfaces"
import { returnUserSchema } from "../../schemas"

const createUserService = async (userData: IUserRequest): Promise<IUser> => {

    const userRepository: UserRepository = AppDataSource.getRepository(User)

    const newUser = userRepository.create(userData)

    await userRepository.save(newUser)

    const user = returnUserSchema.parse(newUser)

    return user
}

export {
    createUserService
}