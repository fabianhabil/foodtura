import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { dateTransformer } from '../../utils/date.util';
import { Merchant } from './merchant.entity';
import { User } from './user.entity';
import { TransactionItem } from './transactionitem.entity';

export enum TransactionStatus {
    Paid,
    Not_Paid,
    Cancelled
}

@Entity('Transaction')
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_transaction' })
    transactionId!: number;

    @Column({ transformer: dateTransformer })
    date!: Date;

    @Column({ name: 'total_price' })
    totalPrice!: number;

    @Column({ type: 'enum', enum: TransactionStatus, default: TransactionStatus.Not_Paid })
    status!: TransactionStatus;

    @Column({ name: 'id_merchant', select: false })
    merchantId!: string;

    @Column({ name: 'id_officer', select: false })
    officerId!: number;

    @ManyToOne(() => Merchant, (merchant) => merchant)
    @JoinColumn({ name: 'id_merchant' })
    merchant!: Merchant;

    @ManyToOne(() => User, (user) => user)
    @JoinColumn({ name: 'id_officer' })
    officer!: User;

    @OneToMany(() => TransactionItem, (transactionItem) => transactionItem)
    transactionItem!: TransactionItem[];
}
