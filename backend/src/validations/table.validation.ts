import { IsNumber, IsString } from "class-validator";

export class CreateTableDto{
    @IsString()
    name!: string;

    @IsNumber()
    size!: number;

    @IsString()
    merchantId!: string;
}

export class EditTableDto{
    @IsString()
    name!: string;

    @IsNumber()
    size!: number;
}