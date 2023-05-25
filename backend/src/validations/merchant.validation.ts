import { IsString } from "class-validator";

export class MerchantDTO {
    @IsString()
    name!: string;

    @IsString()
    address!: string;
}

export class MerchantEditDTO extends MerchantDTO {
    @IsString()
    merchantUrl!: string;

    @IsString()
    name!: string;

    @IsString()
    address!: string;
}