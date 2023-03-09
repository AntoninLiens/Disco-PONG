import { Exclude } from "class-transformer";
import { Game } from "src/game/game.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Users {
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

    @Column({ type: 'varchar', nullable: true })
    pfp: string;

    @Column({ type: 'int', default: 0 })
    score: number;

    @Column({ type: 'int', default: 0 })    
    level: number;

    @Column({ type: 'int', default: 0 })
    xp: number;

    @Column({ type: 'int', default: 0 })
    coins: number;

    @ManyToOne(() => Game, game => game.winner)
    victories: Game[];

    @ManyToOne(() => Game, game => game.looser)
    defeats: Game[];
}
export default Users;