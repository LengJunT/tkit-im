import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class FriendMap {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    friendId: string;

    @Column()
    userId: string;
}
