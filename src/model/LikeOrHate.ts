import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from './User';
import Review from './Review';

class LikeOrHate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne((type) => User)
    @JoinColumn({ name: 'createdUser', referencedColumnName: 'id' })
    user!: User;

    @ManyToOne((type) => Review)
    @JoinColumn({ name: 'targetReview', referencedColumnName: 'id' })
    review!: Review;

    @Column()
    like!: boolean;
}

export default LikeOrHate;
