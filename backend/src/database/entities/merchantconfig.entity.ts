import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Merchant } from './merchant.entity';

@Entity('Merchant_Config')
export class MerchantConfig extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'id_merchant' })
    merchantConfigId!: number;

    @Column({ length: 64, name: 'primary_color' })
    primaryColor!: string;

    @Column({ length: 64, name: 'secondary_color' })
    secondaryColor!: string;

    @Column({ length: 64, name: 'third_color' })
    thirdColor!: string;

    @Column({ length: 64, name: 'logo_photo_path' })
    logoPhotoPath!: string;

    @Column({ length: 64, name: 'home_photo_path' })
    homePhotoPath!: string;

    @Column({ length: 64, name: 'about_photo_path' })
    aboutPhotoPath!: string;

    @Column({ length: 64, name: 'about_description' })
    aboutDescription!: string;

    @ManyToOne(() => Merchant)
    @JoinColumn({ name: 'id_merchant' })
    merchant!: Merchant;
}
