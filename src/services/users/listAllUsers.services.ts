import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IAllUsers, IUser, UserRepository } from "../../interfaces"
import { returnAllUsersSchema } from "../../schemas"

const listAllUsersService = async (): Promise<IAllUsers> => {

    const userRepository: UserRepository = AppDataSource.getRepository(User)

    const findUsers: Array<IUser> = await userRepository.find()

    const users = returnAllUsersSchema.parse(findUsers)

    return users

}

export {
    listAllUsersService
}