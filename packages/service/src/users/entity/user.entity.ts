import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account: string;

    @Column()
    name: string;

    @Column()
    avatar: string;

    @Column()
    password: string

    /**
     * 用户状态
     */
    @Column({ default: 'on' })
    status: 'on' | 'off'

    @Column({type: 'double',default: new Date().valueOf()})
    createTime: number;
}
