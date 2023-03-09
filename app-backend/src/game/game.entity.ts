import Users from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @OneToMany(() => Users, Users => Users.victories)
    winner: Users;

    @OneToMany(() => Users, Users => Users.victories)
    looser: Users;
}