import { Service } from "typedi";
import { FoodDTO, TransactionItemDTO } from "../validations/transactionitem.validation";
import { TransactionItem } from "../database/entities/transactionitem.entity";
import { Errors } from "../utils/api.util";

@Service()
export class TransactionItemService {
    async createTransactionItem(dto: TransactionItemDTO) {
        const foods: FoodDTO[] = dto.foods;

        for (let i = 0; i < foods.length; i++) {
            const transactionItem = TransactionItem.create({ ...dto.foods[i] })
            await TransactionItem.save(transactionItem);
        }
    }

    async getTransactionItem(transactionItemId: number){
        const transactionItem = await TransactionItem.findOneBy({transactionItemId});

        if(!transactionItem){
            throw Errors.TRANSACTION_ITEM_NOT_FOUND;
        }

        return transactionItem;
    }

    async getAllTransactionItem(transactionId: number){
        const transactionItems = await TransactionItem.find({where: {transactionId}});

        if(!transactionItems){
            throw Errors.TRANSACTION_ITEM_NOT_FOUND;
        }

        return transactionItems;
    }

    async deleteTransactionItem(transactionItemId: number){
        const transactionItem = await this.getTransactionItem(transactionItemId);

        await TransactionItem.remove(transactionItem);
    }

    async editTransactionItem(dto: FoodDTO, transactionItemId: number){
        const transactionItem = await this.getTransactionItem(transactionItemId);

        transactionItem.quantity = dto.quantity;
        transactionItem.price = dto.price;
        transactionItem.transactionId = dto.transactionId;
        transactionItem.foodId = dto.foodId;
        transactionItem.isCooked = dto.isCooked;

        await transactionItem.save();
    }
}