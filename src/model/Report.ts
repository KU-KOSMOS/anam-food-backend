import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from './User';
import Review from './Review';

@Entity()
class Report extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne((_type) => User)
    @JoinColumn({ name: 'reporter', referencedColumnName: 'id' })
    reporter!: User;

    @ManyToOne((_type) => Review)
    @JoinColumn({ name: 'reportedReview', referencedColumnName: 'id' })
    reportedReview!: Review;
}

export default Report;
