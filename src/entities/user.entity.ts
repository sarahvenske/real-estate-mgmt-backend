import { hashSync } from "bcryptjs"
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeUpdate,
    BeforeInsert,
    OneToMany
} from "typeorm"
import { Schedule } from "./schedule.entity"

@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 45 })
    name: string

    @Column({ type: "varchar", length: 45, unique: true })
    email: string

    @Column({ type: "boolean"})
    admin: boolean

    @Column({ type: "varchar", length: 120 })
    password: string

    @CreateDateColumn({ type: "timestamp"})
    createdAt: string

    @UpdateDateColumn({ type: "timestamp"})
    updatedAt: string

    @DeleteDateColumn({ type: "timestamp", nullable: true })
    deletedAt: string | null | undefined

    @OneToMany(() => Schedule, (schedule) => schedule.user,
    { cascade: true })
    schedules: Schedule[]
    
}

export {
    User
}