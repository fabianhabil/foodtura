import { IsNumber, IsString } from 'class-validator';

export class MerchantDTO {
    @IsString()
    name!: string;

    @IsString()
    address!: string;

    @IsNumber()
    userId!: number;
}

export class MerchantEditDTO extends MerchantDTO {
    @IsString()
    merchantUrl!: string;

    @IsString()
    name!: string;

    @IsString()
    address!: string;
}
