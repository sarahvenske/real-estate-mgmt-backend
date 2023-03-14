import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { UserRepository } from "../../interfaces"

const softDeleteUserService = async (userId: number): Promise<void> => {

    const userRepository: UserRepository = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    await userRepository.softRemove(findUser!)
    
}

export {
    softDeleteUserService
}