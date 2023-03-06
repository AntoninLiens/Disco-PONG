import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', nullable: true })
    @Exclude()
    refreshToken: string;

    @Column({ type: 'varchar', unique: true })
    name: string;

    @Column({ type: 'varchar' })
    @Exclude()
    password: string;
}
export default User;