import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Note extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    color: string
}