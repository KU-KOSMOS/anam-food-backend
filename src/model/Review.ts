import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from './User';
import Store from './Store';

@Entity()
class Review extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne((type) => User)
    @JoinColumn({ name: 'createdUser', referencedColumnName: 'id' })
    createdUser!: User;

    @ManyToOne((type) => Store)
    @JoinColumn({ name: 'targetStore', referencedColumnName: 'id' })
    targetStore!: Store;

    @Column({ length: 1 })
    rating!: number;

    @Column()
    content!: string;

    @Column()
    likeCount!: number;

    @Column()
    hateCount!: number;

    @Column()
    enabled!: boolean;
}

export default Review;
