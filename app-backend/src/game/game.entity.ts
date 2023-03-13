import Users from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @ManyToOne(() => Users, Users => Users.victories)
    winner: Users;

    @ManyToOne(() => Users, Users => Users.defeats)
    looser: Users;
}