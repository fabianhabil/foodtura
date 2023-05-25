import { Service } from "typedi";
import { createTableDto, editTableDto } from "../validations/table.validation";
import { TableMerchant } from "../database/entities/tablemerchant.entity";
import { table } from "console";
import { Merchant } from "../database/entities/merchant.entity";
import { Errors } from "../utils/api.util";

@Service()
export class TableService{
    async create({name, size, merchantId}: createTableDto){
        const table = TableMerchant.create({name, size, merchantId});
        await TableMerchant.save(table);
    }

    async getAll(merchantId: string){
        const tables = await TableMerchant.findBy({merchantId});

        return tables;
    }
    
    async get(tableId: string){
        const table = await TableMerchant.findOneBy({tableId});

        if(!table){
            throw Errors.TABLE_NOT_FOUND
        }

        return table
    }

    async delete(tableId: string){
        const table = await this.get(tableId);
        
        await TableMerchant.remove(table);
    }

    async edit(tableId: string, {name, size}: editTableDto){
        const table = await this.get(tableId);
        
        table.name = name;
        table.size = size;

        return table.save();
    }
}