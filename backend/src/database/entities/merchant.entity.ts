import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MerchantConfig } from './merchantconfig.entity';
import { TableMerchant } from './tablemerchant.entity';
import { FoodCategory } from './foodcategory.entity';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

@Entity('Merchant')
export class Merchant extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_merchant' })
    merchantId!: string;

    @Column({ length: 64 })
    name!: string;

    @Column({ length: 64 })
    address!: string;

    @Column({ length: 64, unique: true })
    merchantUrl!: string;

    @OneToMany(() => MerchantConfig, (merchantConfig) => merchantConfig)
    config!: MerchantConfig[];

    @OneToMany(() => TableMerchant, (tableMerchant) => tableMerchant)
    table!: TableMerchant[];

    @OneToMany(() => FoodCategory, (foodCategory) => foodCategory)
    foodCategory!: FoodCategory[];

    @OneToMany(() => Transaction, (transaction) => transaction)
    transaction!: Transaction[];

    @OneToMany(() => User, (user) => user)
    officer!: User[];
}
