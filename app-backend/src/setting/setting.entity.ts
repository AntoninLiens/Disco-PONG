import Users from "src/user/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Setting {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'char', default: 'W' })
    moveUp: CharacterData;

    @Column({ type: 'char', default: 'S' })
    moveDown: CharacterData;

    @Column({ type: 'boolean', default: true })
    showScore: boolean;

    @Column({ type: 'boolean', default: true })
    showProfiles: boolean;

    @OneToOne(() => Users, user => user.id)
    user: Users;
}