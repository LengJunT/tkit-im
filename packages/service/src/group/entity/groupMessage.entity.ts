import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GroupMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    groupId: string;

    @Column()
    content: string;

    @Column()
    messageType: string;

    @Column({type: 'double', default: new Date().valueOf()})
    time: number;
}
