import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Node extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    createDate: Date;

    @Column()
    updateDate: Date;
}