import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Merchant } from './merchant.entity';
import { Food } from './food.entity';

@Entity('Food_Category')
export class FoodCategory extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_food_category' })
    foodCategoryId!: number;

    @Column({ length: 64 })
    name!: string;

    @ManyToOne(() => Merchant)
    @JoinColumn({ name: 'id_merchant' })
    merchant!: Merchant;

    @OneToMany(() => Food, (food) => food)
    food!: Food[];
}
