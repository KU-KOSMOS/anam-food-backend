import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * A User Type
 * @typedef {object} User
 * @property {number} id
 * @property {string} oauthToken
 * @property {number} reputation
 * @property {boolean} isAdmin
 * @property {boolean} enabled
 */

@Entity()
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    oauthToken!: string;

    @Column()
    reputation!: number;

    @Column()
    isAdmin!: boolean;

    @Column()
    enabled!: boolean;
}

export default User;
