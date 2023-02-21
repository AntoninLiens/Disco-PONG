import { ID, InterfaceType, Field } from "@nestjs/graphql";
import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@InterfaceType()
export abstract class Node extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string

    @Field(() => Date)
    @CreateDateColumn()
    createDate: Date;

    @Field(() => Date)
    @UpdateDateColumn()
    updateDate: Date;
}