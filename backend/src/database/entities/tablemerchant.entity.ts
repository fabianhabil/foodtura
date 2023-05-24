import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Merchant } from './merchant.entity';

@Entity('Table_Merchant')
export class TableMerchant extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_table_merchant' })
    tableId!: string;

    @Column({ length: 64 })
    name!: string;

    @Column()
    size!: number;

    @ManyToOne(() => Merchant)
    @JoinColumn({ name: 'id_merchant' })
    merchant!: Merchant;
}
