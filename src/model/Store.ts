import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { WorkDay, PriceRange } from '../types/store';

@Entity()
class Store extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    category!: string;

    @Column()
    description!: string;

    @Column()
    averageRating!: number;

    @Column()
    location!: string;

    @Column()
    workTime!: WorkDay;

    @Column()
    pricingRange!: PriceRange;

    @Column()
    enabled!: boolean;
}

export default Store;
