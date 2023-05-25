import { IsNumber, IsString } from "class-validator";

export class tableDto{
    @IsString()
    name!: string;

    @IsNumber()
    size!: number;

    @IsString()
    idMerchant!: string;
}