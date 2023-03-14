import { getRounds, hashSync } from "bcryptjs"
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeUpdate,
    BeforeInsert,
} from "typeorm"

@Entity("users")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 45 })
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ type: "boolean", default: false })
    admin: boolean

    @Column({ length: 120 })
    password: string

    @CreateDateColumn({type:"date"})
    createdAt: string

    @UpdateDateColumn({type:"date"})
    updatedAt: string

    @DeleteDateColumn({type:"date", nullable: true })
    deletedAt: string | null | undefined

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
    
}

export {
    User
}