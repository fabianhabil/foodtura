import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Merchant } from './merchant.entity';

@Entity('RSVP_Merchant')
export class RSVP extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id_rsvp_merchant' })
    rsvpId!: string;

    @Column()
    date!: Date;

    @Column()
    size!: number;

    @ManyToOne(() => Merchant)
    @JoinColumn({ name: 'id_merchant' })
    merchant!: Merchant;
}
