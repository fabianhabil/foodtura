import { IsNumber, IsString } from "class-validator";

export class createTableDto{
    @IsString()
    name!: string;

    @IsNumber()
    size!: number;

    @IsString()
    merchantId!: string;
}

export class editTableDto{
    @IsString()
    name!: string;

    @IsNumber()
    size!: number;
}