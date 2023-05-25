import { Service } from "typedi";
import { tableDto } from "../validations/table.validation";
import { TableMerchant } from "../database/entities/tablemerchant.entity";

@Service()
export class tableService{
    async create({name, size, merchantId}: tableDto){
        const table = TableMerchant.create({name, size, merchantId});
        await TableMerchant.save(table);
    }
}