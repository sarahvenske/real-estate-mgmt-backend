import { z } from "zod"
import { loginSchema } from "../schemas";

type ILogin = z.infer<typeof loginSchema>

export {
    ILogin
}