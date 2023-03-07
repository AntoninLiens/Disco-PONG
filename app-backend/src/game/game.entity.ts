import Users from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'timestamp' })
    date: Date;

    @JoinColumn()
    @OneToMany(() => Users, Users => Users.victories)
    winner: Users;

    @JoinColumn()
    @OneToMany(() => Users, Users => Users.victories)
    looser: Users;    
}