import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Food } from './food.entity';

@Entity('Transaction_Item')
export class TransactionItem extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_transaction_item' })
    transactionItemId!: number;

    @Column()
    quantity!: number;

    @Column()
    price!: number;

    @Column({ name: 'id_transaction', select: false })
    transactionId!: number;

    @ManyToOne(() => Transaction)
    @JoinColumn({ name: 'id_transaction' })
    transaction!: Transaction;

    @ManyToOne(() => Food)
    @JoinColumn({ name: 'id_food' })
    food!: Food;
}
