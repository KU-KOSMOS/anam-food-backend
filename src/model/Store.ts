import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * @typedef {object} Store
 * @property {number} id
 * @property {string} name
 * @property {string} category
 * @property {string} description
 * @property {number} averageRating
 * @property {string} location
 * @property {string} location
 * @property {string} workTime
 * @property {string} pricingRange
 * @property {boolean} enabled
 */

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
