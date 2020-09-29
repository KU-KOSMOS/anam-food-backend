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

@Entity()
class LikeOrHate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne((_type) => User)
    @JoinColumn({ name: 'createdUser', referencedColumnName: 'id' })
    createdUser!: User;

    @ManyToOne((_type) => Review)
    @JoinColumn({ name: 'targetReview', referencedColumnName: 'id' })
    targetReview!: Review;

    @Column()
    like!: boolean;
}

export default LikeOrHate;
