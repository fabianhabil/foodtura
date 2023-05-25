import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrackingEmbed } from './embedded/tracking.embed';
import { Merchant } from './merchant.entity';
import { Transaction } from './transaction.entity';

export enum UserRole {
    OWNER,
    OFFICER
}

@Entity('User')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_user' })
    userId!: number;

    @Column({ length: 64 })
    name!: string;

    @Column({ length: 64, unique: true })
    email!: string;

    @Column({ length: 64, select: false })
    password!: string;

    @Column({ type: 'enum', default: UserRole.OWNER, enum: UserRole })
    role!: UserRole;

    @Column(() => TrackingEmbed, { prefix: false })
    track!: TrackingEmbed;

    @Column({ name: 'id_merchant', select: false })
    merchantId!: string;

    @ManyToOne(() => Merchant, { nullable: true })
    @JoinColumn({ name: 'id_merchant' })
    merchant!: Merchant;

    @OneToMany(() => Transaction, (transaction) => transaction)
    transaction!: Transaction[];

    toJSON() {
        const cloned = { ...this } as Record<string, unknown>;
        delete cloned.password;
        return cloned;
    }
}
