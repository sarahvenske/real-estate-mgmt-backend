import "express-async-errors"
import express, { Application } from "express"
import {
    categoryRouters,
    loginRouters,
    realEstateRouters,
    scheduleRouters,
    userRouters
} from "./routers"
import { handleErrors } from "./errors"

const app: Application = express()
app.use(express.json())

app.use("/categories", categoryRouters)
app.use("/login", loginRouters)
app.use("/realEstate", realEstateRouters)
app.use("/schedules", scheduleRouters)
app.use("/users", userRouters)

app.use(handleErrors)

export default app