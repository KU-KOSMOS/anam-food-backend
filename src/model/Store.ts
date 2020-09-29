import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
    workTime!: string;

    @Column()
    pricingRange!: string;

    @Column()
    enabled!: boolean;
}

export default Store;
