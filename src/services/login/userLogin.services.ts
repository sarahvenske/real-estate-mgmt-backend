import { compare } from "bcryptjs"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { ILogin, UserRepository } from "../../interfaces"
import jwt from "jsonwebtoken"
import "dotenv/config"

const userLoginService = async (loginData: ILogin): Promise<string> => {

    const userRepository: UserRepository = AppDataSource.getRepository(User)

    const findUser: User | null = await userRepository.findOneBy({
        email: loginData.email
    })

    if(!findUser){
        throw new AppError("Invalid credentials", 401) 
    }

    const validatePasword = await compare(loginData.password, findUser.password)
    
    if(!validatePasword){
        throw new AppError("Invalid credentials", 401) 
    }

    const token: string = jwt.sign(
        {
            admin: findUser.admin
        },  
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: String(findUser.id)
        }
    )

    return token
}

export {
    userLoginService
}