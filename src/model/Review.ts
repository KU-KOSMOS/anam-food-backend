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

/**
 * A Review Type
 * @typedef {object} Review
 * @property {User} createdUser
 * @property {Store} targetStore
 * @property {number} rating
 * @property {string} content
 * @property {number} likeCount
 * @property {number} hateCount
 * @property {boolean} enabled
 */

@Entity()
class Review extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne((_type) => User)
    @JoinColumn({ name: 'createdUser', referencedColumnName: 'id' })
    createdUser!: User;

    @ManyToOne((_type) => Store)
    @JoinColumn({ name: 'targetStore', referencedColumnName: 'id' })
    targetStore!: Store;

    @Column()
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
