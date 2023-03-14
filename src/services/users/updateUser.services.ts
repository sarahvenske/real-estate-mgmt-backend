import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IUser, IUserUpdateRequest, UserRepository } from "../../interfaces"
import { returnUserSchema } from "../../schemas"

const updateUserService = async (userId: number, updateData: IUserUpdateRequest): Promise<IUser> => {

    const userRepository: UserRepository = AppDataSource.getRepository(User)

    const previousData: User | null = await userRepository.findOneBy({
        id: userId
    })

    const updatedUser = userRepository.create({
        ...previousData,
        ...updateData
    })

    await userRepository.save(updatedUser)

    const user = returnUserSchema.parse(updatedUser)

    return user
}

export {
    updateUserService
}