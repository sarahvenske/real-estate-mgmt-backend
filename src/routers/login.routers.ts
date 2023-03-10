import { Router } from "express";
import {
    userLoginController
} from "../controllers"

const loginRouters: Router = Router()

loginRouters.post("", userLoginController)

export {
    loginRouters
}