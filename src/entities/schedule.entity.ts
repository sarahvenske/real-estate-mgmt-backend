import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne
} from "typeorm"
import { RealEstate } from "./realEstate.entity"
import { User } from "./user.entity"

@Entity("schedules_users_properties")
class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number

    @CreateDateColumn({ type: "date" })
    date: string

    @CreateDateColumn({ type: "time" })
    hour: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate

}

export {
    Schedule
}