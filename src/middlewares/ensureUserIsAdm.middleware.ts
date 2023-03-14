import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors"

const ensureUserIsAdmMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    if(req.method === "GET" && !req.user.admin){
        throw new AppError("Insufficient permission", 403)
    }

    if(req.method === "POST" && !req.user.admin){
        throw new AppError("Insufficient permission", 403)
    }

    const userAuthId = req.user.id
    const paramsId = Number(req.params.id)
    
    if(req.method === "PATCH" && !req.user.admin && userAuthId !== paramsId){
        throw new AppError("Insufficient permission", 403)
    }

    if(req.method === "DELETE" && !req.user.admin){
        throw new AppError("Insufficient permission", 403)
    }
    
    return next()

}

export { ensureUserIsAdmMiddleware }