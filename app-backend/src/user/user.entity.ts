import { Exclude } from "class-transformer";
import { Friends } from "src/friends/friends.entity";
import { Game } from "src/game/game.entity";
import { Setting } from "src/setting/setting.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


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

    @OneToMany(() => Game, game => game.winner)
    victories: Game[];

    @OneToMany(() => Game, game => game.looser)
    defeats: Game[];

    @OneToOne(() => Setting, setting => setting.id)
    settings: Setting;

    @Column({ type: 'varchar', default: 'offline' })
    status: string;
}
export default Users;