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

class Report extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne((type) => User)
    @JoinColumn({ name: 'reporter', referencedColumnName: 'id' })
    reporter!: User;

    @ManyToOne((type) => Review)
    @JoinColumn({ name: 'reportedReview', referencedColumnName: 'id' })
    reportedReview!: Review;
}

export default Report;
