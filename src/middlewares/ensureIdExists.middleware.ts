import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../errors"

const ensureIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const userRepository = AppDataSource.getRepository(User)
 
    const findUser = await userRepository.findOneBy({
        id:  Number(req.params.id)
    })

    if(!findUser){
        throw new AppError("User not found", 404) 
    }

    return next()
}

export { ensureIdExistsMiddleware}

