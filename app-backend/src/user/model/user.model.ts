import { Field, ObjectType } from '@nestjs/graphql';
import { Column, JoinColumn, Entity, OneToMany } from 'typeorm'
import { Node } from 'src/pagination/models/node.model';
import { Game } from 'src/game/model/game.model';

@Entity()
@ObjectType()
export class User extends Node {
    @Field(() => String)
    @Column({ unique: true })
    name: string

    @Field(() => String)
    @Column()
    password: string

    @Field(() => String, { nullable: true })
    @Column({ nullable: true })
    image?: string | null

    @Field()
    @Column()
    score: number

    @Field()
    @Column()
    coins: number

    @Field()
    @Column()
    level: number

    @Field()
    @Column()
    statut: boolean

    @OneToMany(() => Game, (game) => game.winner)
    wins: Game[];

    @OneToMany(() => Game, target => target.looser)
    looses: Game[];

    //friends
}