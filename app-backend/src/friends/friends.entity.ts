import Users from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Friends {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', default: 'pending' })
    statut: string;

    @ManyToOne(() => Users, user => user.id)
    demander: Users;

    @ManyToOne(() => Users, user => user.id)
    invited: Users;
}