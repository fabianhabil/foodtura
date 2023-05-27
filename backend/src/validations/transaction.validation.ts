import { IsDateString, IsEnum, IsNumber, IsString } from "class-validator";
import { TransactionStatus } from "../database/entities/transaction.entity";

export class CreateTransactionDTO{
    @IsDateString()
    date!: Date;

    @IsNumber()
    totalPrice!: number;

    @IsString()
    merchantId!: string;

    @IsNumber()
    officerId!: number;
}

export class EditTransactionDTO{
    @IsEnum(TransactionStatus)
    status!: TransactionStatus;
}