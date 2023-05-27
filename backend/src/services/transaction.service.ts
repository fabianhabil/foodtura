import { Service } from "typedi";
import { Transaction } from "../database/entities/transaction.entity";
import { Errors } from "../utils/api.util";
import { CreateTransactionDTO, EditTransactionDTO } from "../validations/transaction.validation";

@Service()
export class TransactionSercice {
    async createTransaction(dto:CreateTransactionDTO){
        const transaction = Transaction.create({
            ...dto,
            date: new Date(dto.date)
        });

        await Transaction.save(transaction);
    }
    
    async getTransaction(transactionId: number) {
        const transaction = await Transaction.findOne({ where: { transactionId }, relations: { transactionItem: true } });

        if (!transaction) {
            throw Errors.TRANSACTION_NOT_FOUND;
        }

        return transaction;
    }

    async getAllTransaction(merchantId: string) {
        const transactions = await Transaction.find({ relations: { transactionItem: true }, where: {merchantId} });

        return transactions;
    }

    async deleteTransaction(transactionId: number){
        const transaction = await this.getTransaction(transactionId);

        await Transaction.remove(transaction);
    }

    async editTransaction(dto: EditTransactionDTO, transactionId: number){
        const transaction = await this.getTransaction(transactionId);

        transaction.status = dto.status;

        await transaction.save();
    }

    
}