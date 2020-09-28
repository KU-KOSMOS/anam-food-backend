import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
