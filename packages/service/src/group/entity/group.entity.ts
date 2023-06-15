import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    groupId: number;

    /**
     * 群主
     */
    @Column()
    ownerId: string;

    @Column()
    groupName: string;

    /**
     * 群描述
     */
    @Column()
    describe: string;

    @Column({type: 'double',default: new Date().valueOf()})
    createTime: number;
}

@Entity()
export class GroupMap {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    groupId: string;

    @Column()
    userId: string;
}
