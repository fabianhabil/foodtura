import { IsArray, IsBoolean, IsNumber } from "class-validator";

export class TransactionItemDTO {
    @IsArray()
    foods!: FoodDTO[];
}

export class FoodDTO {
    @IsNumber()
    quantity!: number;

    @IsNumber()
    price!: number;

    @IsNumber()
    transactionId!: number;

    @IsNumber()
    foodId!: number;

    @IsBoolean()
    isCooked!: boolean;
}