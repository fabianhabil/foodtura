import { Service } from "typedi";
import { Merchant } from "../database/entities/merchant.entity";
import { Errors } from "../utils/api.util";
import { MerchantDTO, MerchantEditDTO } from "../validations/merchant.validation";
import { number } from "joi";

@Service()
export class MerchantService {
    async create({ name, address }: MerchantDTO) {
        const merchantUrl = name.split(" ").join("-");
        const isMerchantUrlTaken = await Merchant.findOneBy({ merchantUrl })

        if (isMerchantUrlTaken) {
            throw Errors.MERCHANTURL_TAKEN;
        }

        const merchant = Merchant.create({ name, address, merchantUrl });
        await Merchant.save(merchant);
    }

    async get(merchantId: string){
        const merchant = await Merchant.findOneBy({merchantId});

        if(!merchant){
            throw Errors.MERCHANT_NOT_FOUND
        }

        return merchant;
    }

    async delete(merchantId: string){
        const merchant = await this.get(merchantId);

        await Merchant.remove(merchant)
    }

    async edit(merchantId: string, {merchantUrl, name, address}: MerchantEditDTO){
        const merchant = await this.get(merchantId);
        const isMerchantUrlTaken = await Merchant.findOneBy({ merchantUrl });

        if (isMerchantUrlTaken) {
            throw Errors.MERCHANTURL_TAKEN;
        }

        merchant.name = name;
        merchant.address = address;
        merchant.merchantUrl = merchantUrl;

        return merchant.save();
    }

    async getAll(){
        const merchant = await Merchant.find()

        return merchant;
    }

}