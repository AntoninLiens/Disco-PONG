import { Field, ObjectType } from '@nestjs/graphql';
import { Node } from 'src/pagination/models/node.model';
import { User } from 'src/user/model/user.model';
import { Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';

@Entity()
@ObjectType()
export class Game extends Node {
    @Field(() => User, { nullable: true })
    @ManyToOne(() => User, (user: User) => user.wins)
    @JoinColumn()
    winner: User;

    @RelationId((self: Game) => self.winner)
    readonly winnerId: User['id'];

    @Field(() => User, { nullable: true })
    @ManyToOne(() => User, user => user.looses)
    @JoinColumn()
    looser: User;

    @RelationId((self: Game) => self.looser)
    readonly looserId: User['id'];

}