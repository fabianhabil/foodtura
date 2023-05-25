import { Service } from "typedi";
import { Merchant } from "../database/entities/merchant.entity";
import { Errors } from "../utils/api.util";
import { MerchantDTO } from "../validations/merchant.validation";

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

}