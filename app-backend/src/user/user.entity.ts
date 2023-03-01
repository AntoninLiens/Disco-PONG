import { Node } from "src/base/node.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends Node {
    @Column({ unique: true })
    name: string;

    @Column()
    password: string;
}