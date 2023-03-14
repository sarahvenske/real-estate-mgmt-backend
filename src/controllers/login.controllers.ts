import { Request, Response } from "express"
import { ILogin } from "../interfaces"
import { userLoginService } from "../services"


const userLoginController = async (req: Request, res: Response) => {
    
    const loginData: ILogin = req.body
    const token = await userLoginService(loginData)
    
    return res.json({
        token: token
    })
}

export {
    userLoginController
}