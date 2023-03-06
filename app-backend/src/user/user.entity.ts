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

	@Column({ type: 'varchar', nullable: 'true' })
	pfp: string;

	@Column({ type: 'int', nullable: 'true' })
	score: number;

	@Column({ type: 'int', nullable: 'true' })    
	level: number
}
export default User;